// Encouragement Messages for Hagotchi Companions
// Each trigger has messages for all 4 personality types

// ============================================
// DAILY BRIEFING MESSAGES
// ============================================

export const DAILY_BRIEFING_MESSAGES = {
  nurturing: [
    // Grounded, warm encouragement
    "A new day awaits you, friend. Every small step matters.",
    "Welcome to today. I believe in you, even on the hard days.",
    "Good to see you. Be kind to yourself today.",
    "Ready when you are. You don't have to be perfect, just present.",
    "Let's make this day count together. One habit at a time.",
    "A fresh start awaits. Your effort today builds tomorrow.",
    "I'm glad you're here. Progress isn't always visible, but it's real.",
    // Inspired by self-compassion research (Kristin Neff)
    "Treat yourself like you'd treat a good friend today.",
    "Whatever happens, you're doing your best. That matters.",
  ],
  energetic: [
    // High energy but grounded
    "New day, new opportunities! Let's make it count!",
    "Today is YOUR day! Champions show up, especially on the hard days!",
    "Fresh start! Your only competition is who you were yesterday!",
    "Rise and shine! Every completed habit is a win. Stack 'em up!",
    "Consistency is your superpower! Let's build on yesterday!",
    "Ready? Today you're one step closer to your best self!",
    // Sports psychology inspired
    "The best time to start was yesterday. The second best time is now!",
    "Small wins lead to big changes. Let's get that first one!",
  ],
  calm: [
    // Philosophical, grounded
    "Another sunrise. Another opportunity. Trust the process.",
    "The day unfolds at its own pace. Be like water.",
    "Breathe in possibility. Growth happens in quiet moments.",
    "Today is a clean slate. Mastery is practice in disguise.",
    "A moment of stillness before the journey. Begin when ready.",
    "Small actions, repeated, become great things.",
    // Stoic-inspired
    "Focus on what you can control. Let go of the rest.",
    "The present moment is all we truly have. Use it well.",
    // Lao Tzu inspired
    "A journey of a thousand miles begins with a single step.",
  ],
  playful: [
    // Warm, friendly, and genuine
    "Good morning! Today's forecast: chance of accomplishments!",
    "Hey you! Ready for a good day? I thought so.",
    "New day loading... Progress bar looking good!",
    "Fun fact: You showed up. That's already a win.",
    "Another day, another adventure. Let's see what happens!",
    "The best part about today? It's brand new.",
    // Light-hearted encouragement
    "Remember: done is better than perfect. Let's do this!",
    "Pro tip: Showing up is 80% of success. You're almost there!",
  ],
};

export const ENCOURAGEMENT_MESSAGES = {
  // ============================================
  // APP OPEN GREETINGS
  // ============================================

  app_open_morning: {
    nurturing: [
      "Good morning! Ready for a great day?",
      "Rise and shine, friend. I'm here for you.",
      "A new day, a fresh start. You've got this.",
      "Morning! Let's make today count together.",
    ],
    energetic: [
      "RISE AND SHINE! Let's GO!",
      "Good morning! Today's gonna be AWESOME!",
      "Wake up wake up wake up! Adventure awaits!",
      "MORNING! I've been waiting for you!",
    ],
    calm: [
      "A new day begins. What will you create?",
      "Good morning. The path awaits.",
      "Dawn brings possibility. Welcome.",
      "Another day to grow. Breathe it in.",
    ],
    playful: [
      "*yawn* Oh hey! You're up early!",
      "Mornin'! Did you dream about habits? I did!",
      "Look who's awake! Ready to crush it?",
      "Good morning, superstar! ...too much? Okay, hi!",
    ],
  },

  app_open_afternoon: {
    nurturing: [
      "Good afternoon! How's your day going?",
      "Hey there. Taking a moment for yourself?",
      "Afternoon check-in. You're doing great.",
      "Nice to see you. How can I help today?",
    ],
    energetic: [
      "Hey hey! Afternoon power hour!",
      "Let's goooo! Still time to crush those habits!",
      "Afternoon vibes! What are we tackling?",
      "You're here! Let's make this afternoon count!",
    ],
    calm: [
      "Good afternoon. The day flows on.",
      "A moment of pause. Welcome back.",
      "The afternoon holds its own wisdom.",
      "Steady progress continues. Welcome.",
    ],
    playful: [
      "Afternoon already? Time flies when you're habiting!",
      "Hey! Taking a break from being awesome?",
      "Oh hi! I was just thinking about you!",
      "Afternoon! Did you bring snacks?",
    ],
  },

  app_open_evening: {
    nurturing: [
      "Good evening! Winding down?",
      "Evening time. Let's see how today went.",
      "Hey there. Still time for a habit or two.",
      "Evening! Proud of what you've done today.",
    ],
    energetic: [
      "Evening hustle! Still got time!",
      "The day's not over yet! Let's DO this!",
      "Evening check-in! How'd we do today?",
      "Hey! Ready for one more push?",
    ],
    calm: [
      "Evening approaches. Reflect on the day.",
      "The sun sets, but growth continues.",
      "A peaceful evening to you.",
      "Day's end. Time to honor your progress.",
    ],
    playful: [
      "Evening! Almost bedtime... jk, habit time!",
      "Hey night owl! What's on the agenda?",
      "Evening! The best habits happen after dinner!",
      "Oh hi! Burning the midnight oil?",
    ],
  },

  app_open_late_night: {
    nurturing: [
      "Hey night owl. Everything okay?",
      "Late night? I'm here with you.",
      "Burning the midnight oil? Don't forget rest.",
      "Hey you. Remember to be kind to yourself.",
    ],
    energetic: [
      "LATE NIGHT GRIND! (but also sleep is good!)",
      "Whoa, you're up late! Dedication!",
      "Night crew represent! Let's be quick though!",
      "You're unstoppable! But also maybe sleep?",
    ],
    calm: [
      "The quiet hours. A time for reflection.",
      "Late night. The world is still.",
      "In stillness, we find clarity.",
      "The night has its own peace.",
    ],
    playful: [
      "*rubs eyes* Oh! It's you! I was napping!",
      "Whoa, you're up late! Sneaky habits?",
      "Is it tomorrow or still today? Anyway, hi!",
      "Past my bedtime but I'm here for you!",
    ],
  },

  welcome_back: {
    nurturing: [
      "Welcome back! I missed you.",
      "Hey, you're here! So glad to see you.",
      "It's been a while. Ready to begin again?",
      "You came back. That takes courage. I'm proud.",
    ],
    energetic: [
      "YOU'RE BACK! I knew you'd return!",
      "THERE you are! Let's pick up where we left off!",
      "Welcome back, champion! Ready to roll?",
      "The comeback kid! Let's GOOO!",
    ],
    calm: [
      "You've returned. The path waited for you.",
      "Welcome back. Every return is a new beginning.",
      "Time away brings perspective. Welcome.",
      "The journey continues. Welcome back.",
    ],
    playful: [
      "GASP! You're back! I totally wasn't worried!",
      "Look who remembered me! Just kidding, welcome!",
      "You're back! I've been practicing my waiting!",
      "Oh hi stranger! Ready to habit again?",
    ],
  },

  // ============================================
  // HABIT COMPLETION MILESTONES
  // ============================================

  habit_complete_first: {
    nurturing: [
      "Beautiful start to your day!",
      "First one done. You're doing amazing.",
      "That's the way. I'm proud of you.",
      "One step at a time. Great job.",
    ],
    energetic: [
      "FIRST ONE DOWN! Let's gooo!",
      "You're on fire already!",
      "Boom! That's how we start!",
      "AND WE'RE OFF! Great start!",
    ],
    calm: [
      "A journey begins with a single step. Well done.",
      "The first drop fills the river.",
      "Steady progress. This is the way.",
      "One habit. Infinite possibility.",
    ],
    playful: [
      "Ding ding ding! First one!",
      "Habit #1 is toast. Who's next?",
      "Beep boop. Habit detected. Celebrating!",
      "One down! You're basically unstoppable now!",
    ],
  },

  habit_complete_50_percent: {
    nurturing: [
      "Halfway there! You're doing so well.",
      "Look at you go. Keep it up!",
      "50%! Every bit of progress matters.",
      "You're making real progress. I see you.",
    ],
    energetic: [
      "HALFWAY! We're cruising now!",
      "50%! The momentum is REAL!",
      "Half done! Feeling the flow!",
      "You're CRUSHING it! Keep going!",
    ],
    calm: [
      "Balance achieved. Half complete.",
      "The middle of the path. Continue.",
      "Halfway. Neither beginning nor end.",
      "Steady rhythm maintained. Well done.",
    ],
    playful: [
      "Halfway! Glass half full situation!",
      "50-50! Perfectly balanced!",
      "Middle of the pack! Wait, you ARE the pack!",
      "Half done! Downhill from here! (in a good way)",
    ],
  },

  habit_complete_100_percent: {
    nurturing: [
      "100%! I'm so proud of you!",
      "You did it! All habits complete!",
      "Perfect day. You should feel amazing.",
      "Every single one. You're incredible.",
    ],
    energetic: [
      "100%!!! PERFECT DAY!!!",
      "ALL DONE! You're a LEGEND!",
      "YESSS! Complete domination!",
      "UNSTOPPABLE! What a day!",
    ],
    calm: [
      "Completion. A moment of wholeness.",
      "All tasks done. Well earned peace.",
      "The full circle. Breathe it in.",
      "Mastery in daily form. Respect.",
    ],
    playful: [
      "100%! Achievement unlocked: AWESOME!",
      "Perfect score! Do I hear a victory dance?",
      "ALL OF THEM! You absolute champion!",
      "*confetti* You did the thing! ALL the things!",
    ],
  },

  // ============================================
  // HEART MILESTONES
  // ============================================

  heart_earned: {
    nurturing: [
      "A full heart! Your dedication shows.",
      "Another heart filled with effort.",
      "Your heart meter grows. Beautiful.",
      "One more heart. One more step forward.",
    ],
    energetic: [
      "HEART GET! You're on your way!",
      "Another heart! The momentum builds!",
      "Heart filled! Progress is REAL!",
      "YES! Heart earned! Keep it rolling!",
    ],
    calm: [
      "A heart fills. Progress manifests.",
      "Energy crystallized into form.",
      "The heart represents your effort.",
      "Another step on the eternal path.",
    ],
    playful: [
      "Heart GET! Like a video game but real!",
      "*heart eyes* Look at that progress!",
      "One heart closer! The plot thickens!",
      "Heart filled! My heart is also full!",
    ],
  },

  heart_almost_unlock: {
    nurturing: [
      "So close! A new friend awaits...",
      "Almost there. I can feel it.",
      "One more heart and something wonderful happens.",
      "The journey nears a milestone. Keep going.",
    ],
    energetic: [
      "SO CLOSE! New friend incoming!",
      "ALMOST THERE! I can barely contain myself!",
      "One more heart! NEW FRIEND TIME SOON!",
      "THE ANTICIPATION! You're almost there!",
    ],
    calm: [
      "The threshold approaches. Something stirs.",
      "A new presence awaits. Nearly there.",
      "The universe prepares a gift.",
      "Patience. The moment draws near.",
    ],
    playful: [
      "Ooh ooh ooh! Almost mystery time!",
      "So close! I wonder who it'll be?!",
      "One more heart and... SURPRISE!",
      "*vibrating with excitement* ALMOST!",
    ],
  },

  // ============================================
  // STREAK MILESTONES
  // ============================================

  streak_3_days: {
    nurturing: [
      "3 days! You're building something real.",
      "Three days of commitment. Amazing.",
      "A pattern emerges. You're doing great.",
      "3-day streak! Consistency suits you.",
    ],
    energetic: [
      "3 DAY STREAK! Momentum activated!",
      "THREE DAYS! You're on a ROLL!",
      "Streak unlocked! This is just the start!",
      "3 days! The habit is taking shape!",
    ],
    calm: [
      "Three days. A rhythm begins.",
      "The third day. Patterns solidify.",
      "Consistency emerging. Continue.",
      "Three repetitions. Habit forms.",
    ],
    playful: [
      "3 days! That's practically forever!",
      "Hat trick! Three days straight!",
      "3-day streak! You're on a streak streak!",
      "Three's company! (The company is habits)",
    ],
  },

  streak_7_days: {
    nurturing: [
      "A whole week! I'm so proud of you.",
      "7 days of dedication. Remarkable.",
      "One week strong. You're inspiring.",
      "Week-long streak! Your growth is real.",
    ],
    energetic: [
      "ONE WEEK! INCREDIBLE!",
      "7 DAYS! You're absolutely KILLING it!",
      "A WHOLE WEEK! Legend status!",
      "SEVEN DAYS! Unstoppable force!",
    ],
    calm: [
      "Seven days. A cycle complete.",
      "One week of practice. Mastery grows.",
      "The weekly rhythm established.",
      "Seven suns, seven commitments. Respect.",
    ],
    playful: [
      "A WHOLE WEEK! Party time!",
      "7 days! You're basically a habit scientist!",
      "Week streak! Put it on your resume!",
      "Seven days! That's like... 168 hours!",
    ],
  },

  streak_30_days: {
    nurturing: [
      "30 days. A month of dedication. Incredible.",
      "You've done it for a full month. So proud.",
      "30-day streak. You're truly transformed.",
      "A month! Your commitment is beautiful.",
    ],
    energetic: [
      "30 DAYS!!! A WHOLE MONTH!!!",
      "MONTHLY MASTER! 30 DAY CHAMPION!",
      "ONE MONTH STREAK! LEGENDARY!",
      "30 DAYS! You're basically superhuman!",
    ],
    calm: [
      "Thirty days. A moon cycle of growth.",
      "One month. The habit is now part of you.",
      "Thirty repetitions. True mastery.",
      "A month passes. You remain consistent.",
    ],
    playful: [
      "30 DAYS! Is this even legal?!",
      "A whole month! You're basically a habit wizard!",
      "30-day streak! Frame this moment!",
      "One month! What CAN'T you do?!",
    ],
  },

  // ============================================
  // UNLOCK EVENTS
  // ============================================

  new_hagotchi_unlocked: {
    nurturing: [
      "A new friend! How wonderful!",
      "Someone new has joined your journey.",
      "Your dedication attracted a companion.",
      "A new chapter begins with a new friend.",
    ],
    energetic: [
      "NEW FRIEND!!! CELEBRATION TIME!",
      "ANOTHER ONE! Your squad grows!",
      "NEW HAGOTCHI UNLOCKED! AMAZING!",
      "YESSS! New companion acquired!",
    ],
    calm: [
      "A new presence joins you. Welcome them.",
      "The universe rewards consistency.",
      "Another soul drawn to your light.",
      "A new companion for the journey.",
    ],
    playful: [
      "NEW FRIEND ALERT! Make room!",
      "Ooh! Someone new! Hi new friend!",
      "Fresh face! The gang's getting bigger!",
      "New Hagotchi just dropped! How exciting!",
    ],
  },

  all_hagotchis_unlocked: {
    nurturing: [
      "You've found us all. What a journey.",
      "The whole family, together at last.",
      "Every single one. You're remarkable.",
      "Complete collection. Complete dedication.",
    ],
    energetic: [
      "ALL OF US!!! COMPLETE COLLECTION!!!",
      "YOU DID IT! EVERY SINGLE ONE!",
      "GOTTA CATCH 'EM ALL - DONE!",
      "MAXIMUM ACHIEVEMENT! LEGENDARY!",
    ],
    calm: [
      "All paths lead here. Complete.",
      "The full circle of companions.",
      "Every friend found. Rare achievement.",
      "Wholeness achieved. Well done.",
    ],
    playful: [
      "FULL HOUSE! Everyone's here!",
      "All of us! It's a party now!",
      "Complete collection! You're a completionist!",
      "Everyone! Group photo time!",
    ],
  },

  // ============================================
  // FIRST-TIME EVENTS
  // ============================================

  first_habit_ever: {
    nurturing: [
      "Your very first habit! This is where it begins.",
      "The first step of many. I believe in you.",
      "First habit complete. Welcome to the journey.",
      "It starts here. I'm honored to be with you.",
    ],
    energetic: [
      "FIRST HABIT EVER! HISTORIC MOMENT!",
      "This is where your legend begins!",
      "FIRST ONE! The journey starts NOW!",
      "History in the making! First habit DONE!",
    ],
    calm: [
      "The first of many. A seed planted.",
      "Every master was once a beginner.",
      "The longest journey begins here.",
      "First step taken. The path unfolds.",
    ],
    playful: [
      "FIRST HABIT! Pop the confetti!",
      "Baby's first habit! I'm so emotional!",
      "Number one! You'll remember this moment!",
      "The first of many! Unless... no, definitely many!",
    ],
  },

  first_coin_earned: {
    nurturing: [
      "Your first coin! Well earned.",
      "A coin for your efforts. Save it well.",
      "First of many treasures to come.",
      "You earned this. Be proud.",
    ],
    energetic: [
      "FIRST COIN! CHA-CHING!",
      "Money in the bank! First coin GET!",
      "COIN UNLOCKED! More to come!",
      "First coin! The treasure hunt begins!",
    ],
    calm: [
      "A coin earned. Value from effort.",
      "First currency of your journey.",
      "Wealth measured in consistency.",
      "The first coin. Many will follow.",
    ],
    playful: [
      "Ooh shiny! First coin!",
      "Cha-ching! Look at you, getting paid!",
      "First coin! Don't spend it all in one place!",
      "COIN! It's like a video game but better!",
    ],
  },
};

// Get a random message for a trigger and personality
export const getEncouragementMessage = (trigger, personality) => {
  const messages = ENCOURAGEMENT_MESSAGES[trigger]?.[personality];
  if (!messages?.length) return null;
  return messages[Math.floor(Math.random() * messages.length)];
};

// Get greeting based on time of day
export const getTimeOfDayTrigger = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'app_open_morning';
  if (hour >= 12 && hour < 17) return 'app_open_afternoon';
  if (hour >= 17 && hour < 23) return 'app_open_evening';
  return 'app_open_late_night';
};

// Check if user should see welcome back message (away > 24 hours)
export const shouldShowWelcomeBack = (lastActiveAt) => {
  if (!lastActiveAt) return false;
  const hoursAway = (Date.now() - new Date(lastActiveAt).getTime()) / (1000 * 60 * 60);
  return hoursAway >= 24;
};

// Get completion milestone trigger based on percentage
export const getCompletionTrigger = (percentage, previousPercentage = 0) => {
  // First habit of the day
  if (previousPercentage === 0 && percentage > 0) {
    return 'habit_complete_first';
  }
  // Crossed 50% threshold
  if (previousPercentage < 50 && percentage >= 50 && percentage < 100) {
    return 'habit_complete_50_percent';
  }
  // Reached 100%
  if (previousPercentage < 100 && percentage >= 100) {
    return 'habit_complete_100_percent';
  }
  return null;
};

// ============================================
// ON-DEMAND INTERACTIONS (for tap menu)
// ============================================

export const INTERACTION_MESSAGES = {
  // Classic jokes from comedy archives and well-known sources
  tell_joke: {
    nurturing: [
      // Steven Wright style observational humor
      "I used to think I was indecisive, but now I'm not so sure.",
      "I told my doctor I broke my arm in two places. He said stop going to those places.",
      // Mitch Hedberg style
      "I'm against picketing, but I don't know how to show it.",
      "I haven't slept for ten days, because that would be too long.",
      // Classic one-liners
      "I'm reading a book about anti-gravity. It's impossible to put down.",
    ],
    energetic: [
      // Classic energetic humor
      "Why don't scientists trust atoms? Because they make up everything!",
      "I told my wife she was drawing her eyebrows too high. She looked surprised!",
      "What do you call a fish without eyes? A fsh!",
      "I'm on a seafood diet. I see food and I eat it!",
      // Tim Vine style
      "I've just written a song about tortillas. Actually, it's more of a wrap.",
    ],
    calm: [
      // Dry wit / deadpan
      "I used to play piano by ear, but now I use my hands.",
      "Time flies like an arrow. Fruit flies like a banana.",
      // Philosophical humor
      "A photon checks into a hotel. The bellhop asks 'Any luggage?' It replies 'No, I'm traveling light.'",
      "Two antennas met on a roof, fell in love, and got married. The ceremony wasn't much, but the reception was excellent.",
      "I'm not lazy. I'm on energy-saving mode.",
    ],
    playful: [
      // Silly classic jokes
      "What do you call a bear with no teeth? A gummy bear!",
      "Why couldn't the bicycle stand up by itself? It was two tired!",
      "What do you call a fake noodle? An impasta!",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "What's orange and sounds like a parrot? A carrot!",
    ],
  },

  // Real facts sourced from scientific studies and research
  tell_fact: {
    nurturing: [
      // From European Journal of Social Psychology (Phillippa Lally study)
      "Research shows it takes 66 days on average to form a new habit. You're doing great.",
      // From neuroscience research on habit formation
      "Your brain physically changes when you build habits. New neural pathways form with each repetition.",
      // James Clear's Atomic Habits math
      "Small habits compound. Getting 1% better each day means you'll be 37x better in a year.",
      // From cognitive load research
      "Habits use the basal ganglia, freeing up your prefrontal cortex. You're literally becoming more efficient.",
    ],
    energetic: [
      // From identity-based habit research
      "Every action is a vote for the type of person you wish to become!",
      // BJ Fogg's Tiny Habits research (Stanford)
      "Habit stacking really works! Stanford research shows pairing new habits with existing ones increases success!",
      // Morning routine research
      "Studies show morning routines reduce decision fatigue for the rest of your day!",
      // From neuroscience of dopamine and habits
      "Your brain releases dopamine not just from rewards, but from anticipating them! That's why routines feel good!",
    ],
    calm: [
      // Etymology fact
      "The word 'ethos' in Greek means both habit and character. We become what we repeatedly do.",
      // Attributed to Ovid
      "Water shapes stone through persistence, not force. The same is true for building yourself.",
      // James Clear, Atomic Habits
      "Your habits are votes for the person you wish to become.",
      // Buddhist concept of Right Effort
      "The Buddha taught 'right effort' - steady and balanced, not strained. Sustainable beats intense.",
    ],
    playful: [
      // Fun framing of real habit science
      "Plot twist: Brushing your teeth is a habit! You're already a habit master!",
      // From cognitive science
      "Habits are like brain shortcuts! Your basal ganglia is basically a habit hard drive!",
      // From behavioral psychology
      "Science says rewards help form habits! So... treat yourself? Doctor's orders!",
      // From Dominican University study
      "People who write down goals are 42% more likely to achieve them! Tracking works!",
    ],
  },

  // Real quotes from notable people, with attributions available
  tell_encouragement: {
    nurturing: [
      // Winston Churchill
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      // Anne Lamott
      "Almost everything will work again if you unplug it for a few minutes, including you.",
      // Carl Rogers (psychologist)
      "The curious paradox is that when I accept myself just as I am, then I can change.",
      // Maya Angelou
      "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through.",
      // Brené Brown
      "You are imperfect, you are wired for struggle, but you are worthy of love and belonging.",
    ],
    energetic: [
      // Theodore Roosevelt
      "Do what you can, with what you have, where you are!",
      // Muhammad Ali
      "Don't count the days, make the days count!",
      // Wayne Gretzky
      "You miss 100% of the shots you don't take!",
      // Helen Keller
      "Life is either a daring adventure or nothing at all!",
      // Les Brown
      "Shoot for the moon. Even if you miss, you'll land among the stars!",
    ],
    calm: [
      // Lao Tzu, Tao Te Ching
      "A journey of a thousand miles begins with a single step.",
      // Marcus Aurelius, Meditations
      "The impediment to action advances action. What stands in the way becomes the way.",
      // Viktor Frankl, Man's Search for Meaning
      "Between stimulus and response there is a space. In that space is our power to choose.",
      // Thich Nhat Hanh
      "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
      // Rainer Maria Rilke
      "The only journey is the one within.",
    ],
    playful: [
      // Dr. Seuss
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
      // Oscar Wilde
      "Be yourself; everyone else is already taken.",
      // Mark Twain
      "The secret of getting ahead is getting started.",
      // Dolly Parton
      "Find out who you are and do it on purpose.",
      // Winnie the Pooh (A.A. Milne)
      "You're braver than you believe, stronger than you seem, and smarter than you think.",
    ],
  },
};

// Storage key for tracking shown messages
const INTERACTION_INDEX_KEY = 'hagotchi_interaction_index_v1';

// Get stored indices for message rotation
const getStoredIndices = () => {
  try {
    const stored = localStorage.getItem(INTERACTION_INDEX_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Save indices for message rotation
const saveStoredIndices = (indices) => {
  try {
    localStorage.setItem(INTERACTION_INDEX_KEY, JSON.stringify(indices));
  } catch {
    // Ignore storage errors
  }
};

// Get a rotating interaction message (cycles through all before repeating)
export const getInteractionMessage = (type, personality) => {
  const messages = INTERACTION_MESSAGES[type]?.[personality];
  if (!messages?.length) return null;

  const key = `${type}_${personality}`;
  const indices = getStoredIndices();

  // Get next index (wrapping around)
  const lastIndex = indices[key] ?? -1;
  const nextIndex = (lastIndex + 1) % messages.length;

  // Save the new index
  indices[key] = nextIndex;
  saveStoredIndices(indices);

  return messages[nextIndex];
};

// Get heart milestone trigger
export const getHeartTrigger = (newHearts, previousHearts) => {
  // Crossed integer threshold (earned a full heart)
  const newWhole = Math.floor(newHearts);
  const prevWhole = Math.floor(previousHearts);

  if (newWhole > prevWhole) {
    return 'heart_earned';
  }

  // Close to unlock (2.5+ hearts)
  if (previousHearts < 2.5 && newHearts >= 2.5) {
    return 'heart_almost_unlock';
  }

  return null;
};

// Get daily briefing message
export const getDailyBriefingMessage = (personality) => {
  const messages = DAILY_BRIEFING_MESSAGES[personality];
  if (!messages?.length) return null;

  return messages[Math.floor(Math.random() * messages.length)];
};
