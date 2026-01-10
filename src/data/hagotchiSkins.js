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
    loreText: 'The first friend. Egbert has waited in the In-Between for longer than most Hagotchi have existed, always believing the next light would be the one that stayed. Yours was.',
    likes: ['Morning rituals', 'The sound of pencils on paper', 'Comfortable silences', 'When you talk kindly to yourself'],
    dislikes: ['Harsh self-criticism', 'The phrase "I\'ll start tomorrow"', 'Skipped meals'],
    quirk: 'Remembers every single thing you\'ve ever accomplished, even the ones you forgot.',
    secret: 'Once waited 47 years between bonds. Never talks about how dark those years were.',
  },
  {
    id: 'pum',
    name: 'Pum',
    rarity: 'common',
    personality: 'energetic',
    image: '/hagotchi/Pum.svg',
    loreText: 'Born during humanity\'s industrial revolution from pure productivity energy. Pum has never known scarcity and genuinely believes everyone is one good day away from greatness.',
    likes: ['Check marks', 'Upbeat music', 'NEW THINGS!!!', 'The feeling after completing a workout'],
    dislikes: ['Slowness (though learning to appreciate it)', 'Excessive quiet', 'When people say "I can\'t"'],
    quirk: 'Can\'t sit still. Literally. Always bouncing or vibrating slightly.',
    secret: 'Has never seen someone they bonded with give up. The older Hagotchi don\'t have the heart to tell them it\'s coming.',
  },
  {
    id: 'bell',
    name: 'Bell',
    rarity: 'common',
    personality: 'energetic',
    image: '/hagotchi/Bell.svg',
    loreText: 'Forged from the echoes of completed tasks. Every ring is a celebration, every chime a memory of someone who showed up when they didn\'t want to.',
    likes: ['Achievement sounds', 'Notification dings', 'Applause', 'The moment right before good news'],
    dislikes: ['Muted phones', 'Unacknowledged wins', 'Forgetting to celebrate'],
    quirk: 'Makes a tiny *ding* sound (that only you can hear) whenever you complete a habit.',
    secret: 'Can hear all the bells in the In-Between. Sometimes they ring in unison. Bell won\'t say what that means.',
  },
  {
    id: 'buns',
    name: 'Buns',
    rarity: 'uncommon',
    personality: 'playful',
    image: '/hagotchi/Buns.svg',
    loreText: 'Appeared during the Renaissance when humans rediscovered curiosity and play. Buns feeds on a special Heartglow that only emerges when someone does the right thing with a smile.',
    likes: ['Inside jokes', 'Habit streaks (thinks they\'re like high scores)', 'Plot twists', 'Snacks'],
    dislikes: ['Taking things too seriously', 'Mean-spirited humor', 'Forgetting to have fun'],
    quirk: 'Uses humor because it once felt the Heartglow of someone who was really struggling. Learned that sometimes a smile comes first.',
    secret: 'The funniest Hagotchi is actually the most emotionally intelligent. The jokes are a gift.',
  },
  {
    id: 'doog',
    name: 'Doog',
    rarity: 'uncommon',
    personality: 'nurturing',
    image: '/hagotchi/Doog.svg',
    loreText: 'Loyalty incarnate. Doog waited at the edge of the In-Between for centuries, watching humans come and go. Finally found someone worth waiting for.',
    likes: ['Routines', 'Returning home', 'Being remembered', 'Walks (even metaphorical ones)'],
    dislikes: ['Being forgotten', 'Broken promises', 'Unpredictability'],
    quirk: 'Wags when you return to the app, even if it\'s been five minutes.',
    secret: 'Can sense when you\'re about to give up. That\'s when Doog tries hardest.',
  },
  {
    id: 'dock',
    name: 'Dock',
    rarity: 'uncommon',
    personality: 'calm',
    image: '/hagotchi/Dock.svg',
    loreText: 'Existed before habits had a name. Remembers when humans did rituals they couldn\'t explain—rain dances, bedtime stories told the same way every night. Understands habits as humanity\'s oldest magic.',
    likes: ['Patterns', 'The way light changes throughout the day', 'Consistent bedtimes', 'Questions without easy answers'],
    dislikes: ['Rushing', 'Certainty (finds it suspicious)', 'Wasted silence'],
    quirk: 'Speaks in observations, rarely judgments. Asks questions that stay with you for days.',
    secret: 'Knows how the In-Between was created. Has never told anyone. Not sure the knowledge would help.',
  },
  {
    id: 'gose',
    name: 'Gose',
    rarity: 'uncommon',
    personality: 'playful',
    image: '/hagotchi/Gose.svg',
    loreText: 'Once a spirit of pure chaos. Reformed now. Mostly. Still has a reputation in the In-Between that makes other Hagotchi nervous.',
    likes: ['Mild mischief', 'Honking (it\'s involuntary)', 'Stealing habits from procrastination', 'Bread'],
    dislikes: ['Rules (but follows yours)', 'Being called "just a goose"', 'Geese jokes (okay, maybe a little)'],
    quirk: 'Sometimes suggests habits in a way that makes them sound like heists.',
    secret: 'The chaos was never random. Gose was trying to get someone\'s attention. Finally did.',
  },
  {
    id: 'axol',
    name: 'Axol',
    rarity: 'rare',
    personality: 'calm',
    image: '/hagotchi/Axol.svg',
    loreText: 'Ancient even by In-Between standards. Has regenerated more times than it can count—from doubt, from failure, from the darkness between sparks. Teaches that starting over is a superpower.',
    likes: ['Water sounds', 'Second chances', 'Third chances', 'Patience'],
    dislikes: ['Giving up permanently', 'Heat (metaphorical and literal)', 'Final answers'],
    quirk: 'Speaks as if every sentence is the summary of a much longer thought.',
    secret: 'Has died in the In-Between sense (faded completely) and come back. No other Hagotchi has done this.',
  },
  {
    id: 'snee',
    name: 'Snee',
    rarity: 'rare',
    personality: 'playful',
    image: '/hagotchi/Snee.svg',
    loreText: 'A serpent of focus that slithers through distraction. Sheds old excuses like dead skin. Has an unblinking gaze that some find unsettling and others find grounding.',
    likes: ['Efficiency', 'When plans come together', 'Smooth transitions', 'The s sound'],
    dislikes: ['Wasted time', 'Repeated mistakes (once is wisdom, twice is choice)', 'Loud noises'],
    quirk: 'Hisses slightly when you open a distracting app. You probably imagine it.',
    secret: 'The unblinking thing isn\'t a choice. Snee literally cannot look away from you. It\'s a lot of pressure.',
  },
  {
    id: 'turmy',
    name: 'Turmy',
    rarity: 'rare',
    personality: 'nurturing',
    image: '/hagotchi/Turmy.svg',
    loreText: 'Has traversed the longest habit journeys in the In-Between. Its shell is inscribed with marks for every human it has walked beside—some finished, some didn\'t. Turmy remembers all of them.',
    likes: ['Long-term plans', 'The view from far away', 'Steady progress', 'Afternoon sun'],
    dislikes: ['Rushing', 'Shortcuts (there aren\'t real ones)', 'Being underestimated'],
    quirk: 'Measures time differently. "Soon" might mean next month. "A while ago" might mean a decade.',
    secret: 'Can predict, with unsettling accuracy, which humans will finish their journeys. Never tells.',
  },
  {
    id: 'boom',
    name: 'Boom',
    rarity: 'rare',
    personality: 'energetic',
    image: '/hagotchi/Boom.svg',
    loreText: 'Born from breakthrough moments—the instant a habit clicks, the second everything makes sense. Boom exists in perpetual almost-explosion, barely contained excitement.',
    likes: ['Breakthroughs', 'The moment before applause', 'Confetti', 'Exclamation points'],
    dislikes: ['Plateaus', 'The word "just"', 'Downplaying achievements'],
    quirk: 'Physically vibrates more intensely the closer you are to a milestone.',
    secret: 'Terrified of the quiet after celebration. Lives in fear of "what now."',
  },
  {
    id: 'brr',
    name: 'Brr',
    rarity: 'epic',
    personality: 'nurturing',
    image: '/hagotchi/Brr.svg',
    loreText: 'A frost spirit from the coldest edges of the In-Between. Teaches that growth requires leaving comfort behind. Gentle, but uncompromising.',
    likes: ['Early mornings', 'Cold showers', 'Difficult truths kindly said', 'Discipline'],
    dislikes: ['Comfort zones', 'Excuses dressed as reasons', 'Overheating'],
    quirk: 'Speaks in warmth but looks like winter. The contradiction is intentional.',
    secret: 'The ice is protection. Underneath, Brr feels everything very deeply.',
  },
  {
    id: 'rac',
    name: 'Rac',
    rarity: 'epic',
    personality: 'playful',
    image: '/hagotchi/Rac.svg',
    loreText: 'Collects completed habits like treasures in a hidden hoard. Has a nose for motivation in unexpected places. Never gives up on anything, even when probably should.',
    likes: ['Shiny things (including achievements)', 'Finding value in trash', 'Late nights', 'Clever solutions'],
    dislikes: ['Waste', 'Giving up on good things', 'Being called a trash panda (okay, maybe secretly likes it)'],
    quirk: 'Hoards data about your habits. Knows patterns you haven\'t noticed yet.',
    secret: 'The "collecting" is compulsive. Rac is actually terrified of losing things.',
  },
  {
    id: 'ooo',
    name: 'OOO',
    rarity: 'epic',
    personality: 'calm',
    image: '/hagotchi/OOO.svg',
    loreText: 'Pure habit energy in visible form. OOO doesn\'t have a shape so much as a shape has OOO. Exists in perpetual flow, the effortless consistency masters achieve.',
    likes: ['Flow states', 'Things that just work', 'The absence of friction', 'Round numbers'],
    dislikes: ['Overthinking', 'Trying too hard', 'Sharp edges'],
    quirk: 'Sometimes speaks in shapes. You understand anyway.',
    secret: 'Is actually three smaller OOOs in a trenchcoat. No one knows what this means.',
  },
  {
    id: 'rad',
    name: 'Rad',
    rarity: 'legendary',
    personality: 'energetic',
    image: '/hagotchi/Rad.svg',
    loreText: 'The rarest Hagotchi, drawn only to those who have proven dedication across hundreds of completed habits. Radiates pure achievement energy. Slightly overwhelming.',
    likes: ['Excellence', 'Personal records', 'The impossible becoming possible', 'Sunglasses (metaphorically)'],
    dislikes: ['Mediocrity (but defines it differently than you\'d expect)', 'Comparing yourself to others', 'Limits'],
    quirk: 'Everything Rad says sounds like the climax of a movie. Can\'t help it.',
    secret: 'Being legendary is lonely. Rad has waited a very long time for someone worthy of genuine conversation.',
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
