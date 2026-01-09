-- Migration: Hearts System for Hagotchi V2
-- Replaces vitality with hearts-based progression
-- Run this in your Supabase SQL Editor

-- ============================================
-- 1. ADD NEW COLUMNS TO HAGOTCHI_SPIRIT
-- ============================================

-- Hearts base: accumulated hearts from previous days (0-3 range, resets on unlock)
ALTER TABLE hagotchi_spirit
  ADD COLUMN IF NOT EXISTS hearts_base DECIMAL(4,2) DEFAULT 0 CHECK (hearts_base >= 0);

-- Coins: secondary currency (earned on full hearts)
ALTER TABLE hagotchi_spirit
  ADD COLUMN IF NOT EXISTS coins INTEGER DEFAULT 0 CHECK (coins >= 0);

-- Last active timestamp for welcome back messages
ALTER TABLE hagotchi_spirit
  ADD COLUMN IF NOT EXISTS last_active_at TIMESTAMPTZ DEFAULT NOW();

-- Onboarding flag
ALTER TABLE hagotchi_spirit
  ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT false;

-- ============================================
-- 2. CREATE PER-HAGOTCHI STATS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS hagotchi_stats (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  skin_id TEXT NOT NULL,

  -- Discovery info
  discovered_at TIMESTAMPTZ DEFAULT NOW(),
  custom_name TEXT,

  -- Stats accumulated while this Hagotchi was active
  total_days_active INTEGER DEFAULT 0,
  habits_completed_while_active INTEGER DEFAULT 0,
  hearts_earned_while_active DECIMAL(6,2) DEFAULT 0,
  longest_streak_while_active INTEGER DEFAULT 0,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Each user can only have one stats record per skin
  UNIQUE(user_id, skin_id)
);

-- Index for fetching user's stats
CREATE INDEX IF NOT EXISTS idx_hagotchi_stats_user
  ON hagotchi_stats(user_id);

-- ============================================
-- 3. ENABLE ROW LEVEL SECURITY
-- ============================================

ALTER TABLE hagotchi_stats ENABLE ROW LEVEL SECURITY;

-- Users can only view their own stats
CREATE POLICY "Users can view own stats"
  ON hagotchi_stats FOR SELECT
  USING (auth.uid() = user_id);

-- Users can only insert their own stats
CREATE POLICY "Users can insert own stats"
  ON hagotchi_stats FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can only update their own stats
CREATE POLICY "Users can update own stats"
  ON hagotchi_stats FOR UPDATE
  USING (auth.uid() = user_id);

-- Users can only delete their own stats
CREATE POLICY "Users can delete own stats"
  ON hagotchi_stats FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- 4. CREATE TRIGGER FOR UPDATED_AT
-- ============================================

CREATE TRIGGER update_hagotchi_stats_updated_at
    BEFORE UPDATE ON hagotchi_stats
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 5. INITIALIZE EXISTING USERS
-- ============================================

-- Set hearts_base and coins to 0 for existing users
UPDATE hagotchi_spirit
SET
  hearts_base = 0,
  coins = 0,
  last_active_at = NOW(),
  onboarding_completed = true  -- Existing users skip onboarding
WHERE hearts_base IS NULL;

-- Create initial stats for existing users' unlocked Hagotchis
-- This creates a stats record for each unlocked skin
INSERT INTO hagotchi_stats (user_id, skin_id, discovered_at)
SELECT
  hs.user_id,
  unnest(hs.unlocked_skin_ids) as skin_id,
  hs.created_at as discovered_at
FROM hagotchi_spirit hs
ON CONFLICT (user_id, skin_id) DO NOTHING;

-- ============================================
-- 6. ENABLE REALTIME (optional)
-- ============================================

ALTER publication supabase_realtime ADD TABLE hagotchi_stats;

-- ============================================
-- VERIFICATION QUERIES (run after migration)
-- ============================================

-- Check new columns were added
-- SELECT id, user_id, hearts_base, coins, onboarding_completed FROM hagotchi_spirit LIMIT 10;

-- Check stats table was created
-- SELECT * FROM hagotchi_stats LIMIT 10;

-- ============================================
-- FUTURE: DROP VITALITY COLUMNS
-- ============================================
-- After confirming the new system works, run:
-- ALTER TABLE hagotchi_spirit DROP COLUMN IF EXISTS vitality;
-- ALTER TABLE hagotchi_spirit DROP COLUMN IF EXISTS last_fed_at;
