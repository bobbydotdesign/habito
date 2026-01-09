// Hagotchi Skin Definitions
// Each skin represents a different companion character with unique personality

// Personality types determine how a Hagotchi communicates
export const PERSONALITIES = {
  nurturing: 'nurturing',   // Warm, supportive, gentle encouragement
  energetic: 'energetic',   // Hype, excited, lots of enthusiasm
  calm: 'calm',             // Philosophical, peaceful, measured
  playful: 'playful',       // Quirky, funny, unexpected
};

// Rarity weights for blind box selection
export const RARITY_WEIGHTS = {
  common: 0.40,     // 40% chance
  uncommon: 0.15,   // 15% chance each (4 = 60%)
  rare: 0.08,       // 8% chance each (4 = 32%)
  epic: 0.04,       // 4% chance each (3 = 12%)
  legendary: 0.02,  // 2% chance
};

export const SKINS = [
  {
    id: 'egbert',
    name: 'Egbert',
    rarity: 'common',
    personality: 'nurturing',
    image: '/hagotchi/Egbert.svg',
    loreText: 'A mysterious egg that appeared when you first started your habit journey. Despite being "just an egg," Egbert radiates warmth and encouragement. Some say great things hatch from humble beginnings.',
  },
  {
    id: 'pum',
    name: 'Pum',
    rarity: 'common',
    personality: 'energetic',
    image: '/hagotchi/Pum.svg',
    loreText: 'A cheerful pumpkin spirit born from the seeds of consistency. Pum glows brighter with each completed habit, its eternal smile a reminder that growth takes time.',
  },
  {
    id: 'bell',
    name: 'Bell',
    rarity: 'common',
    personality: 'energetic',
    image: '/hagotchi/Bell.svg',
    loreText: 'A tiny bell guardian that rings with joy at every achievement. Bell was forged from the echoes of completed tasks, forever chiming in celebration of progress.',
  },
  {
    id: 'buns',
    name: 'Buns',
    rarity: 'uncommon',
    personality: 'playful',
    image: '/hagotchi/Buns.svg',
    loreText: 'A swift rabbit companion who knows that habits, like hops, are best taken one at a time. Buns embodies the power of showing up day after day.',
  },
  {
    id: 'doog',
    name: 'Doog',
    rarity: 'uncommon',
    personality: 'nurturing',
    image: '/hagotchi/Doog.svg',
    loreText: 'Loyal beyond measure, Doog has been waiting for someone consistent enough to befriend. This faithful companion celebrates your streaks with tail wags and unwavering support.',
  },
  {
    id: 'dock',
    name: 'Dock',
    rarity: 'uncommon',
    personality: 'calm',
    image: '/hagotchi/Dock.svg',
    loreText: 'A determined duck who waddles alongside you through every habit. Dock reminds you that even when progress feels slow, you\'re still moving forward.',
  },
  {
    id: 'gose',
    name: 'Gose',
    rarity: 'uncommon',
    personality: 'playful',
    image: '/hagotchi/Gose.svg',
    loreText: 'A mischievous goose with a mysterious past. Legend says Gose once caused chaos but has reformed, now channeling that chaotic energy into helping you stay on track.',
  },
  {
    id: 'axol',
    name: 'Axol',
    rarity: 'rare',
    personality: 'calm',
    image: '/hagotchi/Axol.svg',
    loreText: 'An ancient axolotl spirit that regenerates motivation like it regenerates limbs. Axol has witnessed countless habit journeys and chooses only the most dedicated companions.',
  },
  {
    id: 'snee',
    name: 'Snee',
    rarity: 'rare',
    personality: 'playful',
    image: '/hagotchi/Snee.svg',
    loreText: 'A sleek serpent of discipline that slithers through procrastination. Snee\'s unblinking gaze keeps you focused, shedding old excuses like dead skin.',
  },
  {
    id: 'turmy',
    name: 'Turmy',
    rarity: 'rare',
    personality: 'nurturing',
    image: '/hagotchi/Turmy.svg',
    loreText: 'Slow and steady wins the race. Turmy has traversed the longest habit journeys, its shell inscribed with the wisdom of patience and persistence.',
  },
  {
    id: 'boom',
    name: 'Boom',
    rarity: 'rare',
    personality: 'energetic',
    image: '/hagotchi/Boom.svg',
    loreText: 'An explosive spirit born from breakthrough moments. Boom appears when habits finally click, celebrating those moments when everything comes together.',
  },
  {
    id: 'brr',
    name: 'Brr',
    rarity: 'epic',
    personality: 'nurturing',
    image: '/hagotchi/Brr.svg',
    loreText: 'A frost spirit that thrives in the cold discipline of routine. Brr teaches that comfort zones must be left behind for true growth to occur.',
  },
  {
    id: 'rac',
    name: 'Rac',
    rarity: 'epic',
    personality: 'playful',
    image: '/hagotchi/Rac.svg',
    loreText: 'A cunning raccoon who collects completed habits like treasures. Rac has a knack for finding motivation in unexpected places and never gives up on a goal.',
  },
  {
    id: 'ooo',
    name: 'OOO',
    rarity: 'epic',
    personality: 'calm',
    image: '/hagotchi/OOO.svg',
    loreText: 'A mysterious blob of pure habit energy that defies classification. OOO exists in a state of perpetual flow, embodying the effortless consistency masters achieve.',
  },
  {
    id: 'rad',
    name: 'Rad',
    rarity: 'legendary',
    personality: 'energetic',
    image: '/hagotchi/Rad.svg',
    loreText: 'The ultimate companion, Rad radiates pure achievement energy. Only those who have proven their dedication through hundreds of completed habits can attract this legendary spirit.',
  },
];

// Get skin by ID (with fallback to default)
export const getSkinById = (id) => SKINS.find(s => s.id === id) || SKINS[0];

// Get rarity color
export const getRarityColor = (rarity) => {
  switch (rarity) {
    case 'common': return '#888';
    case 'uncommon': return '#00ff41';
    case 'rare': return '#00bfff';
    case 'epic': return '#ff00ff';
    case 'legendary': return '#ffaa00';
    default: return '#888';
  }
};

// Select a random Hagotchi from locked pool using rarity weights
export const selectRandomHagotchi = (unlockedSkinIds) => {
  // Get locked skins
  const lockedSkins = SKINS.filter(s => !unlockedSkinIds.includes(s.id));

  if (lockedSkins.length === 0) {
    return null; // All Hagotchis unlocked!
  }

  // Calculate weighted probabilities
  const totalWeight = lockedSkins.reduce((sum, skin) => sum + RARITY_WEIGHTS[skin.rarity], 0);

  // Normalize weights and create cumulative distribution
  let cumulative = 0;
  const distribution = lockedSkins.map(skin => {
    cumulative += RARITY_WEIGHTS[skin.rarity] / totalWeight;
    return { skin, cumulative };
  });

  // Random selection
  const random = Math.random();
  const selected = distribution.find(d => random <= d.cumulative);

  return selected ? selected.skin : lockedSkins[0];
};

// Get all skins of a specific personality
export const getSkinsByPersonality = (personality) => {
  return SKINS.filter(s => s.personality === personality);
};

// Get starter skin pool (common skins for onboarding)
export const getStarterSkins = () => {
  return SKINS.filter(s => s.rarity === 'common');
};

// Select random starter for onboarding
export const selectRandomStarter = () => {
  const starters = getStarterSkins();
  return starters[Math.floor(Math.random() * starters.length)];
};
