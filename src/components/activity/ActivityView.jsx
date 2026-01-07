import React, { useMemo, memo, useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { generateGridData, calculateActivityStats } from '../../utils/activityUtils';
import ContributionGrid from './ContributionGrid';

/**
 * ActivityView - GitHub-style activity tracking view
 * Always shows full year like GitHub's contribution graph
 */
const ACTIVITY_CACHE_KEY = 'habito_activity_cache';

const ActivityView = ({ userId, habits, isMobile }) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Load from cache immediately for instant display
  const [activityData, setActivityData] = useState(() => {
    try {
      const cached = localStorage.getItem(ACTIVITY_CACHE_KEY);
      return cached ? JSON.parse(cached) : null;
    } catch { return null; }
  });
  const [loading, setLoading] = useState(!activityData);
  const [error, setError] = useState(null);

  // Available years (current year and previous years with data)
  const availableYears = useMemo(() => {
    const years = [currentYear];
    if (activityData?.raw) {
      activityData.raw.forEach(row => {
        const year = parseInt(row.completed_date?.split('-')[0]);
        if (year && !years.includes(year)) {
          years.push(year);
        }
      });
    }
    return years.sort((a, b) => b - a); // Newest first
  }, [activityData, currentYear]);

  // Fetch fresh data in background
  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    let mounted = true;

    // If we have cached data, show it immediately
    if (activityData) {
      setLoading(false);
    }

    supabase
      .from('completions')
      .select('completed_date, completion_count, daily_goal')
      .eq('user_id', userId)
      .then(({ data: completions, error: fetchError }) => {
        if (!mounted) return;

        if (fetchError) {
          console.error('Activity error:', fetchError);
          if (!activityData) {
            setError(fetchError.message);
          }
          setLoading(false);
          return;
        }

        // Aggregate by date
        const byDate = {};
        (completions || []).forEach(row => {
          const date = row.completed_date;
          const pct = row.daily_goal > 0 ? Math.min(row.completion_count / row.daily_goal, 1) : 0;
          byDate[date] = (byDate[date] || 0) + pct;
        });

        const newData = { byDate, raw: completions || [] };
        setActivityData(newData);
        setLoading(false);

        // Cache for next visit
        try {
          localStorage.setItem(ACTIVITY_CACHE_KEY, JSON.stringify(newData));
        } catch {}
      });

    return () => { mounted = false; };
  }, [userId]);

  // Generate grid data for selected year
  const gridData = useMemo(() =>
    generateGridData(activityData, selectedYear, habits.length),
    [activityData, selectedYear, habits.length]
  );

  // Calculate stats
  const stats = useMemo(() =>
    calculateActivityStats(activityData, habits.length),
    [activityData, habits.length]
  );

  // Calculate total completions for the year
  const totalCompletions = useMemo(() => {
    if (!activityData || !activityData.raw) return 0;
    return activityData.raw.reduce((sum, row) => sum + (row.completion_count || 0), 0);
  }, [activityData]);

  const refetch = () => {};

  return (
    <div style={{ marginTop: '24px' }}>
      {/* Stats panel - at top for quick glance */}
      <div style={{
        border: '1px solid #333',
        backgroundColor: '#0d0d0d',
        marginBottom: '16px'
      }}>
        <div style={{
          padding: isMobile ? '12px' : '16px',
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? '12px' : '16px'
        }}>
          {/* Current Streak */}
          <div>
            <div style={{
              color: '#666',
              fontSize: '10px',
              marginBottom: '4px',
              letterSpacing: '0.5px'
            }}>
              CURRENT STREAK
            </div>
            <div style={{
              color: stats.currentStreak > 0 ? '#00ff41' : '#888',
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold',
              textShadow: stats.currentStreak > 7 ? '0 0 10px #00ff41' : 'none'
            }}>
              {stats.currentStreak} <span style={{ fontSize: '14px' }}>days</span>
              {stats.currentStreak > 0 && ' 🔥'}
            </div>
          </div>

          {/* Longest Streak */}
          <div>
            <div style={{
              color: '#666',
              fontSize: '10px',
              marginBottom: '4px',
              letterSpacing: '0.5px'
            }}>
              LONGEST STREAK
            </div>
            <div style={{
              color: '#ffaa00',
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold'
            }}>
              {stats.longestStreak} <span style={{ fontSize: '14px' }}>days</span>
            </div>
          </div>

          {/* Active Days */}
          <div>
            <div style={{
              color: '#666',
              fontSize: '10px',
              marginBottom: '4px',
              letterSpacing: '0.5px'
            }}>
              ACTIVE DAYS
            </div>
            <div style={{
              color: '#fff',
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold'
            }}>
              {stats.activeDays}
              <span style={{ color: '#666', fontSize: '14px' }}>
                /{stats.totalDays || gridData.length * 7}
              </span>
            </div>
          </div>

          {/* Average Completion */}
          <div>
            <div style={{
              color: '#666',
              fontSize: '10px',
              marginBottom: '4px',
              letterSpacing: '0.5px'
            }}>
              AVG COMPLETION
            </div>
            <div style={{
              color: stats.averageCompletion >= 75 ? '#00ff41' :
                     stats.averageCompletion >= 50 ? '#ffaa00' : '#888',
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: 'bold'
            }}>
              {stats.averageCompletion}%
            </div>
          </div>
        </div>
      </div>

      {/* Activity grid - GitHub style */}
      <div style={{
        border: '1px solid #333',
        backgroundColor: '#0d0d0d'
      }}>
        {/* Header with year tabs */}
        <div style={{
          borderBottom: '1px solid #333',
          padding: '10px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {/* Year tabs */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {availableYears.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                style={{
                  background: selectedYear === year ? '#1a1a1a' : 'transparent',
                  border: `1px solid ${selectedYear === year ? '#00ff41' : '#333'}`,
                  color: selectedYear === year ? '#00ff41' : '#666',
                  padding: '4px 10px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '11px',
                  borderRadius: '2px'
                }}
              >
                {year}
              </button>
            ))}
          </div>
          <span style={{ fontSize: '10px', color: '#444' }}>
            <span style={{ color: '#00ff41' }}>{totalCompletions}</span> completions
          </span>
        </div>

        {/* Grid content */}
        <div style={{ padding: isMobile ? '12px' : '16px' }}>
          {loading && !activityData ? (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              color: '#00ff41',
              fontSize: '12px'
            }}>
              loading activity data...
            </div>
          ) : error ? (
            <div style={{
              textAlign: 'center',
              padding: '40px',
              color: '#ff4444',
              fontSize: '12px'
            }}>
              error loading activity: {error}
              <br />
              <button
                onClick={refetch}
                style={{
                  marginTop: '12px',
                  background: 'transparent',
                  border: '1px solid #ff4444',
                  color: '#ff4444',
                  padding: '4px 12px',
                  cursor: 'pointer',
                  fontSize: '11px',
                  fontFamily: 'inherit'
                }}
              >
                retry
              </button>
            </div>
          ) : (
            <ContributionGrid
              weeks={gridData}
              totalHabits={habits.length}
              isMobile={isMobile}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// Memoize to prevent re-renders from cursorBlink in parent
export default memo(ActivityView);
