-- Add position column for drag-and-drop ordering
ALTER TABLE habits ADD COLUMN IF NOT EXISTS position INTEGER;

-- Add scheduled_time for display (e.g., "08:00")
ALTER TABLE habits ADD COLUMN IF NOT EXISTS scheduled_time TIME;

-- Add scheduled_days as an array of day numbers (0=Sun, 1=Mon, ..., 6=Sat)
ALTER TABLE habits ADD COLUMN IF NOT EXISTS scheduled_days INTEGER[] DEFAULT ARRAY[0,1,2,3,4,5,6];

-- Initialize position based on existing created_at order
WITH ranked AS (
  SELECT id, user_id, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at) as pos
  FROM habits
)
UPDATE habits h
SET position = r.pos
FROM ranked r
WHERE h.id = r.id AND h.position IS NULL;

-- Create index for efficient ordering queries
CREATE INDEX IF NOT EXISTS idx_habits_user_position ON habits(user_id, position);
