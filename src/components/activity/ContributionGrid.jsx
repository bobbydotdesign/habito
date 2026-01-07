import React, { memo, useMemo } from 'react';
import {
  getColorForPercentage,
  formatDate,
  getMonthLabels,
  getDayLabels
} from '../../utils/activityUtils';

/**
 * Individual grid cell with tooltip
 */
const GridCell = memo(({ date, percentage, isFuture, isToday }) => {
  const color = isFuture
    ? '#0d0d0d'
    : getColorForPercentage(percentage || 0);

  const borderColor = isToday ? '#00ff41' : 'transparent';

  const tooltipText = isFuture
    ? 'Future'
    : `${formatDate(date)}: ${Math.round((percentage || 0) * 100)}%`;

  return (
    <div
      style={{
        width: '12px',
        height: '12px',
        backgroundColor: color,
        borderRadius: '2px',
        cursor: isFuture ? 'default' : 'pointer',
        border: `1px solid ${borderColor}`,
        opacity: isFuture ? 0.3 : 1
      }}
      title={tooltipText}
    />
  );
}, (prev, next) =>
  prev.date === next.date &&
  prev.percentage === next.percentage &&
  prev.isFuture === next.isFuture &&
  prev.isToday === next.isToday
);

GridCell.displayName = 'GridCell';

/**
 * GitHub-style contribution grid
 * Horizontal layout: weeks as columns, days as rows
 * Always shows full year with horizontal scroll
 */
const ContributionGrid = memo(({ weeks, totalHabits, isMobile }) => {
  const dayLabels = getDayLabels();
  const monthLabels = useMemo(() => getMonthLabels(weeks), [weeks]);

  return (
    <div style={{ width: '100%' }}>
      {/* Scrollable container with month labels and grid together */}
      <div style={{
        overflowX: 'auto',
        paddingBottom: '8px'
      }}>
        {/* Inner container for day labels + grid with months */}
        <div style={{ display: 'flex', gap: '4px' }}>
          {/* Day labels column - sticky on left */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            flexShrink: 0,
            paddingTop: '16px' // Space for month labels
          }}>
            {dayLabels.map((day, i) => (
              <div
                key={i}
                style={{
                  width: '16px',
                  height: '12px',
                  fontSize: '9px',
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: '4px'
                }}
              >
                {i % 2 === 1 ? day : ''}
              </div>
            ))}
          </div>

          {/* Weeks container with month labels above */}
          <div>
            {/* Month labels row */}
            <div style={{
              display: 'flex',
              gap: '2px',
              marginBottom: '4px',
              height: '12px'
            }}>
              {weeks.map((week, weekIndex) => {
                const monthLabel = monthLabels.find(m => m.weekIndex === weekIndex);
                return (
                  <div
                    key={weekIndex}
                    style={{
                      width: '12px',
                      fontSize: '9px',
                      color: '#666',
                      whiteSpace: 'nowrap',
                      overflow: 'visible'
                    }}
                  >
                    {monthLabel ? monthLabel.month : ''}
                  </div>
                );
              })}
            </div>

            {/* Week columns */}
            <div style={{ display: 'flex', gap: '2px' }}>
              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px'
                  }}
                >
                  {week.map((day) => (
                    <GridCell
                      key={day.date}
                      date={day.date}
                      percentage={day.percentage}
                      isFuture={day.isFuture}
                      isToday={day.isToday}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '4px',
        marginTop: '12px',
        fontSize: '10px',
        color: '#666'
      }}>
        <span>Less</span>
        {[0, 0.25, 0.5, 0.75, 1].map((level, i) => (
          <div
            key={i}
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: getColorForPercentage(level),
              borderRadius: '2px'
            }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
});

ContributionGrid.displayName = 'ContributionGrid';

export default ContributionGrid;
