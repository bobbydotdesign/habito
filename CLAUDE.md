# Habito - Claude Context

## Project Overview
A habit tracking app with a retro terminal aesthetic (green on black, monospace fonts). Built with React + Vite, uses Supabase for backend.

## Key Architecture Decisions

### Data Storage
- **habits table**: Main habit data including `streak`, `completed_today`, `completions_today`, `history` (7-day array), `position`, `scheduled_time`, `scheduled_days`
- **completions table**: Historical record of completions by date (source of truth for streak calculations)
- **localStorage cache**: `habito_habits_cache_v2` for faster initial loads

### Streak Calculation
Streaks are calculated from the `completions` table, NOT the `habits.streak` field directly.

**Important lessons learned:**
1. When calculating streaks, start from the **most recent completed date** and count backwards - NOT from today
2. If completions table is empty/sparse, fall back to the `history` array on the habit
3. Never reset streaks during day-change logic - let the recalculation effect handle it
4. When `calculateStreakForHabit` returns `null`, preserve the existing streak value
5. Always default `habit.streak` to 0 if undefined: `const currentStreak = habit.streak || 0`

### Day Change Logic (`checkDayChange`)
- Shifts the `history` array and resets `completed_today`/`completions_today`
- Does NOT touch streaks - streak recalculation happens separately
- Triggered by comparing `localStorage.lastVisit` to current date

### Data Sync
- Cache is invalidated by changing the cache key version (e.g., `_v2`)
- Visibility change handler refetches data when tab becomes active (cross-device sync)
- Background fetches run without timeout when cache exists

## Common Gotchas

### Mobile Touch Events
- Use CSS `touch-action: pan-y` instead of `e.preventDefault()` to handle horizontal swipes
- React adds touch listeners as passive by default, so `preventDefault()` throws errors

### Supabase Timeouts
- Auth refresh can be slow, causing fetch timeouts
- Show cached data immediately, fetch fresh data in background without aggressive timeouts

### State Updates
- When updating habits, always handle null/undefined values: `habit.streak || 0`
- Optimistic updates should include all fields being changed

## File Structure
- `src/components/HabitTracker.jsx` - Main component (large file ~3000+ lines)
- `src/hooks/useCompletions.js` - Hook for recording completions to completions table
- `src/lib/supabase.js` - Supabase client setup
- `supabase/migrations/` - Database migrations

## Styling Conventions
- Terminal aesthetic: green (#00ff41) on black (#0a0a0a)
- Gray scale: #666 (icons), #777 (badges), #888 (labels), #999 (text)
- Mobile uses slightly larger fonts than desktop
- Monospace font family: IBM Plex Mono, Fira Code, SF Mono
