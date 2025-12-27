// D&D 5e Official Races Database
// Sources: PHB, Volo's, Xanathar's, Mordenkainen's, Tasha's, Fizban's, MotM, Adventures

const races = [
  // ===== HUMAN =====
  {
    name: "Human",
    subrace: "Standard",
    source: "PHB",
    asi: {str: 1, dex: 1, con: 1, int: 1, wis: 1, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Extra Language"],
    languages: ["Common", "One extra"]
  },
  {
    name: "Human",
    subrace: "Variant",
    source: "PHB",
    asi: "Choose +1 to two different abilities",
    speed: 30,
    size: "Medium",
    traits: ["Skills (Choose 1)", "Feat (Choose 1)"],
    languages: ["Common", "One extra"]
  },
  
  // ===== DWARF =====
  {
    name: "Dwarf",
    subrace: "Hill Dwarf",
    source: "PHB",
    asi: {con: 2, wis: 1},
    speed: 25,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Dwarven Resilience", "Dwarven Combat Training", "Tool Proficiency", "Stonecunning", "Dwarven Toughness"],
    languages: ["Common", "Dwarvish"],
    hitPointMax: "+1 per level"
  },
  {
    name: "Dwarf",
    subrace: "Mountain Dwarf",
    source: "PHB",
    asi: {con: 2, str: 2},
    speed: 25,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Dwarven Resilience", "Dwarven Combat Training", "Tool Proficiency", "Stonecunning", "Dwarven Armor Training"],
    languages: ["Common", "Dwarvish"],
    armorProficiency: ["Light armor", "Medium armor"]
  },
  {
    name: "Dwarf",
    subrace: "Duergar",
    source: "SCAG/MotM",
    asi: {con: 2, str: 1},
    speed: 25,
    size: "Medium",
    traits: ["Superior Darkvision (120ft)", "Duergar Resilience", "Dwarven Combat Training", "Stonecunning", "Duergar Magic"],
    languages: ["Common", "Dwarvish", "Undercommon"],
    spells: ["Enlarge/Reduce (3rd)", "Invisibility (5th)"]
  },

  // ===== ELF =====
  {
    name: "Elf",
    subrace: "High Elf",
    source: "PHB",
    asi: {dex: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Keen Senses", "Fey Ancestry", "Trance", "Elf Weapon Training", "Cantrip", "Extra Language"],
    languages: ["Common", "Elvish", "One extra"],
    cantrip: "Choose one from Wizard list"
  },
  {
    name: "Elf",
    subrace: "Wood Elf",
    source: "PHB",
    asi: {dex: 2, wis: 1},
    speed: 35,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Keen Senses", "Fey Ancestry", "Trance", "Elf Weapon Training", "Fleet of Foot", "Mask of the Wild"],
    languages: ["Common", "Elvish"]
  },
  {
    name: "Elf",
    subrace: "Dark Elf (Drow)",
    source: "PHB",
    asi: {dex: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Superior Darkvision (120ft)", "Keen Senses", "Fey Ancestry", "Trance", "Sunlight Sensitivity", "Drow Magic", "Drow Weapon Training"],
    languages: ["Common", "Elvish"],
    spells: ["Dancing Lights (cantrip)", "Faerie Fire (3rd)", "Darkness (5th)"]
  },
  {
    name: "Elf",
    subrace: "Eladrin",
    source: "MotM",
    asi: {dex: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Keen Senses", "Fey Ancestry", "Trance", "Fey Step"],
    languages: ["Common", "Elvish"],
    special: "Choose seasonal affinity (Spring/Summer/Autumn/Winter)"
  },
  {
    name: "Elf",
    subrace: "Sea Elf",
    source: "MotM",
    asi: {dex: 2, con: 1},
    speed: 30,
    swimSpeed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Keen Senses", "Fey Ancestry", "Trance", "Sea Elf Training", "Child of the Sea", "Friend of the Sea"],
    languages: ["Common", "Elvish", "Aquan"]
  },
  {
    name: "Elf",
    subrace: "Shadar-kai",
    source: "MotM",
    asi: {dex: 2, con: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Keen Senses", "Fey Ancestry", "Trance", "Blessing of the Raven Queen", "Necrotic Resistance"],
    languages: ["Common", "Elvish"]
  },

  // ===== HALFLING =====
  {
    name: "Halfling",
    subrace: "Lightfoot Halfling",
    source: "PHB",
    asi: {dex: 2, cha: 1},
    speed: 25,
    size: "Small",
    traits: ["Lucky", "Brave", "Halfling Nimbleness", "Naturally Stealthy"],
    languages: ["Common", "Halfling"]
  },
  {
    name: "Halfling",
    subrace: "Stout Halfling",
    source: "PHB",
    asi: {dex: 2, con: 1},
    speed: 25,
    size: "Small",
    traits: ["Lucky", "Brave", "Halfling Nimbleness", "Stout Resilience"],
    languages: ["Common", "Halfling"]
  },
  {
    name: "Halfling",
    subrace: "Ghostwise Halfling",
    source: "SCAG",
    asi: {dex: 2, wis: 1},
    speed: 25,
    size: "Small",
    traits: ["Lucky", "Brave", "Halfling Nimbleness", "Silent Speech"],
    languages: ["Common", "Halfling"]
  },

  // ===== DRAGONBORN =====
  {
    name: "Dragonborn",
    subrace: "Black (Acid)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Acid - 5x30ft line, Dex save)", "Damage Resistance (Acid)"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Blue (Lightning)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Lightning - 5x30ft line, Dex save)", "Damage Resistance (Lightning)"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Brass (Fire)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Fire - 5x30ft line, Dex save)", "Damage Resistance (Fire)"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Bronze (Lightning)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Lightning - 5x30ft line, Dex save)", "Damage Resistance (Lightning)"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Copper (Acid)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Acid - 5x30ft line, Dex save)", "Damage Resistance (Acid)"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Gold (Fire)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Fire - 15ft cone, Dex save)", "Damage Resistance (Fire)"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Green (Poison)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Poison - 15ft cone, Con save)", "Damage Resistance (Poison)"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Red (Fire)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Fire - 15ft cone, Dex save)", "Damage Resistance (Fire)"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Silver (Cold)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Cold - 15ft cone, Con save)", "Damage Resistance (Cold)"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "White (Cold)",
    source: "PHB",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Draconic Ancestry", "Breath Weapon (Cold - 15ft cone, Con save)", "Damage Resistance (Cold)"],
    languages: ["Common", "Draconic"]
  },
  
  // FIZBAN'S GEM DRAGONBORN
  {
    name: "Dragonborn",
    subrace: "Amethyst (Force)",
    source: "Fizban",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Gem Ancestry", "Breath Weapon (Force - 15ft cone)", "Damage Resistance (Force)", "Psionic Mind"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Crystal (Radiant)",
    source: "Fizban",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Gem Ancestry", "Breath Weapon (Radiant - 15ft cone)", "Damage Resistance (Radiant)", "Psionic Mind"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Emerald (Psychic)",
    source: "Fizban",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Gem Ancestry", "Breath Weapon (Psychic - 15ft cone)", "Damage Resistance (Psychic)", "Psionic Mind"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Sapphire (Thunder)",
    source: "Fizban",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Gem Ancestry", "Breath Weapon (Thunder - 15ft cone)", "Damage Resistance (Thunder)", "Psionic Mind"],
    languages: ["Common", "Draconic"]
  },
  {
    name: "Dragonborn",
    subrace: "Topaz (Necrotic)",
    source: "Fizban",
    asi: {str: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Gem Ancestry", "Breath Weapon (Necrotic - 15ft cone)", "Damage Resistance (Necrotic)", "Psionic Mind"],
    languages: ["Common", "Draconic"]
  },

  // ===== GNOME =====
  {
    name: "Gnome",
    subrace: "Forest Gnome",
    source: "PHB",
    asi: {int: 2, dex: 1},
    speed: 25,
    size: "Small",
    traits: ["Darkvision (60ft)", "Gnome Cunning", "Natural Illusionist", "Speak with Small Beasts"],
    languages: ["Common", "Gnomish"],
    cantrip: "Minor Illusion"
  },
  {
    name: "Gnome",
    subrace: "Rock Gnome",
    source: "PHB",
    asi: {int: 2, con: 1},
    speed: 25,
    size: "Small",
    traits: ["Darkvision (60ft)", "Gnome Cunning", "Artificer's Lore", "Tinker"],
    languages: ["Common", "Gnomish"]
  },
  {
    name: "Gnome",
    subrace: "Deep Gnome (Svirfneblin)",
    source: "SCAG/MotM",
    asi: {int: 2, dex: 1},
    speed: 25,
    size: "Small",
    traits: ["Superior Darkvision (120ft)", "Gnome Cunning", "Stone Camouflage"],
    languages: ["Common", "Gnomish", "Undercommon"]
  },

  // ===== HALF-ELF =====
  {
    name: "Half-Elf",
    subrace: "Standard",
    source: "PHB",
    asi: {cha: 2},
    asiChoice: "Choose +1 to two other abilities",
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Fey Ancestry", "Skill Versatility"],
    skillChoice: "Choose 2 skills",
    languages: ["Common", "Elvish", "One extra"]
  },

  // ===== HALF-ORC =====
  {
    name: "Half-Orc",
    subrace: "Standard",
    source: "PHB",
    asi: {str: 2, con: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Menacing", "Relentless Endurance", "Savage Attacks"],
    languages: ["Common", "Orc"]
  },

  // ===== TIEFLING =====
  {
    name: "Tiefling",
    subrace: "Asmodeus",
    source: "PHB",
    asi: {cha: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Hellish Resistance (Fire)", "Infernal Legacy"],
    languages: ["Common", "Infernal"],
    spells: ["Thaumaturgy (cantrip)", "Hellish Rebuke (3rd)", "Darkness (5th)"]
  },
  {
    name: "Tiefling",
    subrace: "Baalzebul",
    source: "MotM",
    asi: {cha: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Hellish Resistance (Fire)", "Legacy of Maladomini"],
    languages: ["Common", "Infernal"],
    spells: ["Thaumaturgy (cantrip)", "Ray of Sickness (3rd)", "Crown of Madness (5th)"]
  },
  {
    name: "Tiefling",
    subrace: "Dispater",
    source: "MotM",
    asi: {cha: 2, dex: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Hellish Resistance (Fire)", "Legacy of Dis"],
    languages: ["Common", "Infernal"],
    spells: ["Thaumaturgy (cantrip)", "Disguise Self (3rd)", "Detect Thoughts (5th)"]
  },
  {
    name: "Tiefling",
    subrace: "Fierna",
    source: "MotM",
    asi: {cha: 2, wis: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Hellish Resistance (Fire)", "Legacy of Phlegethos"],
    languages: ["Common", "Infernal"],
    spells: ["Friends (cantrip)", "Charm Person (3rd)", "Suggestion (5th)"]
  },
  {
    name: "Tiefling",
    subrace: "Glasya",
    source: "MotM",
    asi: {cha: 2, dex: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Hellish Resistance (Fire)", "Legacy of Malbolge"],
    languages: ["Common", "Infernal"],
    spells: ["Minor Illusion (cantrip)", "Disguise Self (3rd)", "Invisibility (5th)"]
  },
  {
    name: "Tiefling",
    subrace: "Levistus",
    source: "MotM",
    asi: {cha: 2, con: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Hellish Resistance (Fire)", "Legacy of Stygia"],
    languages: ["Common", "Infernal"],
    spells: ["Ray of Frost (cantrip)", "Armor of Agathys (3rd)", "Darkness (5th)"]
  },
  {
    name: "Tiefling",
    subrace: "Mammon",
    source: "MotM",
    asi: {cha: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Hellish Resistance (Fire)", "Legacy of Minauros"],
    languages: ["Common", "Infernal"],
    spells: ["Mage Hand (cantrip)", "Tenser's Floating Disk (3rd)", "Arcane Lock (5th)"]
  },
  {
    name: "Tiefling",
    subrace: "Mephistopheles",
    source: "MotM",
    asi: {cha: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Hellish Resistance (Fire)", "Legacy of Cania"],
    languages: ["Common", "Infernal"],
    spells: ["Mage Hand (cantrip)", "Burning Hands (3rd)", "Flame Blade (5th)"]
  },
  {
    name: "Tiefling",
    subrace: "Zariel",
    source: "MotM",
    asi: {cha: 2, str: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Hellish Resistance (Fire)", "Legacy of Avernus"],
    languages: ["Common", "Infernal"],
    spells: ["Thaumaturgy (cantrip)", "Searing Smite (3rd)", "Branding Smite (5th)"]
  },

  // ===== AARAKOCRA =====
  {
    name: "Aarakocra",
    subrace: "Standard",
    source: "EEPC/MotM",
    asi: {dex: 2, wis: 1},
    speed: 25,
    flySpeed: 50,
    size: "Medium",
    traits: ["Flight", "Talons"],
    languages: ["Common", "Aarakocra", "Auran"]
  },

  // ===== AASIMAR =====
  {
    name: "Aasimar",
    subrace: "Protector",
    source: "VGtM",
    asi: {cha: 2, wis: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Celestial Resistance", "Healing Hands", "Light Bearer", "Radiant Soul"],
    languages: ["Common", "Celestial"]
  },
  {
    name: "Aasimar",
    subrace: "Scourge",
    source: "VGtM",
    asi: {cha: 2, con: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Celestial Resistance", "Healing Hands", "Light Bearer", "Radiant Consumption"],
    languages: ["Common", "Celestial"]
  },
  {
    name: "Aasimar",
    subrace: "Fallen",
    source: "VGtM",
    asi: {cha: 2, str: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Celestial Resistance", "Healing Hands", "Light Bearer", "Necrotic Shroud"],
    languages: ["Common", "Celestial"]
  },

  // ===== BUGBEAR =====
  {
    name: "Bugbear",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {str: 2, dex: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Long-Limbed", "Powerful Build", "Sneaky", "Surprise Attack"],
    languages: ["Common", "Goblin"]
  },

  // ===== CENTAUR =====
  {
    name: "Centaur",
    subrace: "Standard",
    source: "GGtR/MotM",
    asi: {str: 2, wis: 1},
    speed: 40,
    size: "Medium",
    traits: ["Fey", "Charge", "Hooves", "Equine Build"],
    languages: ["Common", "Sylvan"]
  },

  // ===== CHANGELING =====
  {
    name: "Changeling",
    subrace: "Standard",
    source: "ERftLW/MotM",
    asi: {cha: 2},
    asiChoice: "Choose +1 to one other ability",
    speed: 30,
    size: "Medium",
    traits: ["Shapechanger", "Changeling Instincts", "Unsettling Visage"],
    languages: ["Common", "Two extras"]
  },

  // ===== FIRBOLG =====
  {
    name: "Firbolg",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {wis: 2, str: 1},
    speed: 30,
    size: "Medium",
    traits: ["Firbolg Magic", "Hidden Step", "Powerful Build", "Speech of Beast and Leaf"],
    languages: ["Common", "Elvish", "Giant"],
    spells: ["Detect Magic (unlimited)", "Disguise Self (1/rest)"]
  },

  // ===== GENASI =====
  {
    name: "Genasi",
    subrace: "Air Genasi",
    source: "EEPC/MotM",
    asi: {con: 2, dex: 1},
    speed: 30,
    size: "Medium",
    traits: ["Unending Breath", "Lightning Resistance", "Mingle with the Wind"],
    languages: ["Common", "Primordial"],
    spells: ["Shocking Grasp (cantrip)", "Feather Fall (3rd - 1/LR)"]
  },
  {
    name: "Genasi",
    subrace: "Earth Genasi",
    source: "EEPC/MotM",
    asi: {con: 2, str: 1},
    speed: 30,
    size: "Medium",
    traits: ["Earth Walk", "Merge with Stone"],
    languages: ["Common", "Primordial"],
    spells: ["Blade Ward (cantrip)", "Pass Without Trace (5th - 1/LR)"]
  },
  {
    name: "Genasi",
    subrace: "Fire Genasi",
    source: "EEPC/MotM",
    asi: {con: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Fire Resistance", "Reach to the Blaze"],
    languages: ["Common", "Primordial"],
    spells: ["Produce Flame (cantrip)", "Burning Hands (3rd - 1/LR)"]
  },
  {
    name: "Genasi",
    subrace: "Water Genasi",
    source: "EEPC/MotM",
    asi: {con: 2, wis: 1},
    speed: 30,
    swimSpeed: 30,
    size: "Medium",
    traits: ["Acid Resistance", "Amphibious", "Call to the Wave"],
    languages: ["Common", "Primordial"],
    spells: ["Acid Splash (cantrip)", "Create or Destroy Water (3rd - 1/LR)"]
  },

  // ===== GITH =====
  {
    name: "Gith",
    subrace: "Githyanki",
    source: "MotM",
    asi: {str: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Astral Knowledge", "Githyanki Psionics", "Psychic Resilience"],
    languages: ["Common", "Gith"],
    spells: ["Mage Hand (cantrip - invisible)", "Jump (3rd)", "Misty Step (5th)"]
  },
  {
    name: "Gith",
    subrace: "Githzerai",
    source: "MotM",
    asi: {wis: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Mental Discipline", "Githzerai Psionics", "Psychic Resilience"],
    languages: ["Common", "Gith"],
    spells: ["Mage Hand (cantrip - invisible)", "Shield (3rd)", "Detect Thoughts (5th)"]
  },

  // ===== GOBLIN =====
  {
    name: "Goblin",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {dex: 2, con: 1},
    speed: 30,
    size: "Small",
    traits: ["Darkvision (60ft)", "Fury of the Small", "Nimble Escape"],
    languages: ["Common", "Goblin"]
  },

  // ===== GOLIATH =====
  {
    name: "Goliath",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {str: 2, con: 1},
    speed: 30,
    size: "Medium",
    traits: ["Natural Athlete", "Stone's Endurance", "Powerful Build", "Mountain Born"],
    languages: ["Common", "Giant"]
  },

  // ===== HOBGOBLIN =====
  {
    name: "Hobgoblin",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {con: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Fey Gift", "Fortune from the Many"],
    languages: ["Common", "Goblin"]
  },

  // ===== KALASHTAR =====
  {
    name: "Kalashtar",
    subrace: "Standard",
    source: "ERftLW",
    asi: {wis: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Dual Mind", "Mental Discipline", "Mind Link", "Severed from Dreams", "Psychic Resistance"],
    languages: ["Common", "Quori", "One extra"]
  },

  // ===== KENKU =====
  {
    name: "Kenku",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {dex: 2, wis: 1},
    speed: 30,
    size: "Medium",
    traits: ["Expert Duplication", "Kenku Recall", "Mimicry"],
    languages: ["Common", "Auran (understand but cannot speak)"]
  },

  // ===== KOBOLD =====
  {
    name: "Kobold",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {dex: 2, str: -2},
    speed: 30,
    size: "Small",
    traits: ["Darkvision (60ft)", "Grovel, Cower, and Beg", "Pack Tactics", "Sunlight Sensitivity"],
    languages: ["Common", "Draconic"]
  },

  // ===== LEONIN =====
  {
    name: "Leonin",
    subrace: "Standard",
    source: "MOoT",
    asi: {con: 2, str: 1},
    speed: 35,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Claws", "Hunter's Instincts", "Daunting Roar"],
    languages: ["Common", "Leonin"]
  },

  // ===== LIZARDFOLK =====
  {
    name: "Lizardfolk",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {con: 2, wis: 1},
    speed: 30,
    swimSpeed: 30,
    size: "Medium",
    traits: ["Bite", "Cunning Artisan", "Hold Breath (15 min)", "Hunter's Lore", "Natural Armor"],
    languages: ["Common", "Draconic"]
  },

  // ===== MINOTAUR =====
  {
    name: "Minotaur",
    subrace: "Standard",
    source: "GGtR/MOoT",
    asi: {str: 2, con: 1},
    speed: 30,
    size: "Medium",
    traits: ["Horns", "Goring Rush", "Hammering Horns", "Labyrinthine Recall"],
    languages: ["Common", "Minotaur"]
  },

  // ===== ORC =====
  {
    name: "Orc",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {str: 2, con: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Adrenaline Rush", "Powerful Build", "Relentless Endurance"],
    languages: ["Common", "Orc"]
  },

  // ===== SATYR =====
  {
    name: "Satyr",
    subrace: "Standard",
    source: "MOoT",
    asi: {cha: 2, dex: 1},
    speed: 35,
    size: "Medium",
    traits: ["Fey", "Ram", "Magic Resistance", "Mirthful Leaps", "Reveler"],
    languages: ["Common", "Sylvan"]
  },

  // ===== SHIFTER =====
  {
    name: "Shifter",
    subrace: "Beasthide",
    source: "ERftLW",
    asi: {con: 2, str: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Shifting (Beasthide - +1d6 temp HP, +1 AC)"],
    languages: ["Common"]
  },
  {
    name: "Shifter",
    subrace: "Longtooth",
    source: "ERftLW",
    asi: {str: 2, dex: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Shifting (Longtooth - Bite attack as bonus action)"],
    languages: ["Common"]
  },
  {
    name: "Shifter",
    subrace: "Swiftstride",
    source: "ERftLW",
    asi: {dex: 2, cha: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Shifting (Swiftstride - +10ft movement, reaction move)"],
    languages: ["Common"]
  },
  {
    name: "Shifter",
    subrace: "Wildhunt",
    source: "ERftLW",
    asi: {wis: 2, dex: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Shifting (Wildhunt - Advantage on Wisdom checks, immune to advantage against you)"],
    languages: ["Common"]
  },

  // ===== TABAXI =====
  {
    name: "Tabaxi",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {dex: 2, cha: 1},
    speed: 30,
    climbSpeed: 20,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Feline Agility", "Cat's Claws", "Cat's Talent"],
    languages: ["Common", "One extra"]
  },

  // ===== TORTLE =====
  {
    name: "Tortle",
    subrace: "Standard",
    source: "TP/MotM",
    asi: {str: 2, wis: 1},
    speed: 30,
    size: "Medium",
    traits: ["Claws", "Hold Breath (1 hour)", "Natural Armor (AC 17)", "Shell Defense", "Survival Instinct"],
    languages: ["Common", "Aquan"]
  },

  // ===== TRITON =====
  {
    name: "Triton",
    subrace: "Standard",
    source: "VGtM/MotM",
    asi: {str: 1, con: 1, cha: 1},
    speed: 30,
    swimSpeed: 30,
    size: "Medium",
    traits: ["Amphibious", "Control Air and Water", "Darkvision (60ft)", "Emissary of the Sea", "Guardians of the Depths"],
    languages: ["Common", "Primordial"],
    spells: ["Fog Cloud (5th - 1/LR)"]
  },

  // ===== WARFORGED =====
  {
    name: "Warforged",
    subrace: "Standard",
    source: "ERftLW",
    asi: {con: 2, str: 1},
    speed: 30,
    size: "Medium",
    traits: ["Constructed Resilience", "Sentry's Rest", "Integrated Protection", "Specialized Design"],
    languages: ["Common", "One extra"]
  },

  // ===== YUAN-TI PUREBLOOD =====
  {
    name: "Yuan-ti",
    subrace: "Pureblood",
    source: "VGtM/MotM",
    asi: {cha: 2, int: 1},
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Magic Resistance", "Poison Immunity", "Serpentine Spellcasting"],
    languages: ["Common", "Abyssal", "Draconic"],
    spells: ["Poison Spray (cantrip)", "Animal Friendship (snakes only - unlimited)", "Suggestion (3rd - 1/LR)"]
  },

  // ===== ADVENTURE-SPECIFIC & OBSCURE RACES =====
  
  // LOCATHAH
  {
    name: "Locathah",
    subrace: "Standard",
    source: "LR",
    asi: {str: 2, dex: 1},
    speed: 10,
    swimSpeed: 30,
    size: "Medium",
    traits: ["Limited Amphibiousness", "Leviathan Will", "Natural Armor"],
    languages: ["Common", "Aquan"]
  },

  // GRUNG
  {
    name: "Grung",
    subrace: "Standard",
    source: "OGA",
    asi: {dex: 2, con: 1},
    speed: 25,
    climbSpeed: 25,
    size: "Small",
    traits: ["Arboreal Alertness", "Amphibious", "Poisonous Skin", "Poison Immunity", "Standing Leap", "Water Dependency"],
    languages: ["Common", "Grung"]
  },

  // VERDAN
  {
    name: "Verdan",
    subrace: "Standard",
    source: "AI",
    asi: {con: 1, cha: 2},
    speed: 30,
    size: "Small to Medium",
    traits: ["Black Blood Healing", "Limited Telepathy", "Persuasive", "Telepathic Insight"],
    languages: ["Common", "Goblin", "One extra"]
  },

  // LOXODON
  {
    name: "Loxodon",
    subrace: "Standard",
    source: "GGtR",
    asi: {con: 2, wis: 1},
    speed: 30,
    size: "Medium",
    traits: ["Powerful Build", "Loxodon Serenity", "Natural Armor", "Trunk", "Keen Smell"],
    languages: ["Common", "Loxodon"]
  },

  // SIMIC HYBRID
  {
    name: "Simic Hybrid",
    subrace: "Standard",
    source: "GGtR",
    asi: {con: 2},
    asiChoice: "Choose +1 to one other ability",
    speed: 30,
    size: "Medium",
    traits: ["Darkvision (60ft)", "Animal Enhancement (Choose 1 at 1st, 1 at 5th)"],
    languages: ["Common", "Elvish or Vedalken"],
    special: "Enhancement options: Manta Glide, Nimble Climber, Underwater Adaptation, Grappling Appendages, Carapace, Acid Spit"
  },

  // VEDALKEN
  {
    name: "Vedalken",
    subrace: "Standard",
    source: "GGtR",
    asi: {int: 2, wis: 1},
    speed: 30,
    size: "Medium",
    traits: ["Vedalken Dispassion", "Tireless Precision", "Partially Amphibious"],
    languages: ["Common", "Vedalken", "One extra"]
  },

  // OWLIN
  {
    name: "Owlin",
    subrace: "Standard",
    source: "SAiS",
    asi: "Choose +2 to one ability and +1 to another",
    speed: 30,
    flySpeed: 30,
    size: "Small or Medium",
    traits: ["Darkvision (120ft)", "Flight", "Silent Feathers"],
    languages: ["Common", "One extra"]
  },

  // FAIRY
  {
    name: "Fairy",
    subrace: "Standard",
    source: "WBtW",
    asi: "Choose +2 to one ability and +1 to another",
    speed: 30,
    flySpeed: 30,
    size: "Small",
    traits: ["Fey", "Fairy Magic", "Flight"],
    languages: ["Common", "Sylvan"],
    spells: ["Druidcraft/Faerie Fire/Enlarge-Reduce"]
  },

  // HARENGON
  {
    name: "Harengon",
    subrace: "Standard",
    source: "WBtW",
    asi: "Choose +2 to one ability and +1 to another",
    speed: 30,
    size: "Small or Medium",
    traits: ["Hare-Trigger", "Leporine Senses", "Lucky Footwork", "Rabbit Hop"],
    languages: ["Common", "One extra"]
  },

  // AUTOGNOME
  {
    name: "Autognome",
    subrace: "Standard",
    source: "SAiS",
    asi: "Choose +2 to one ability and +1 to another",
    speed: 30,
    size: "Small",
    traits: ["Armored Casing", "Built for Success", "Healing Machine", "Mechanical Nature", "Sentry's Rest", "Specialized Design"],
    languages: ["Common", "One extra"]
  },

  // GIFF
  {
    name: "Giff",
    subrace: "Standard",
    source: "SAiS",
    asi: "Choose +2 to one ability and +1 to another",
    speed: 30,
    swimSpeed: 30,
    size: "Medium",
    traits: ["Astral Spark", "Firearms Mastery", "Hippo Build"],
    languages: ["Common", "One extra"]
  },

  // HADOZEE
  {
    name: "Hadozee",
    subrace: "Standard",
    source: "SAiS",
    asi: "Choose +2 to one ability and +1 to another",
    speed: 30,
    climbSpeed: 30,
    size: "Small or Medium",
    traits: ["Dexterous Feet", "Glide", "Hadozee Resilience"],
    languages: ["Common", "One extra"]
  },

  // PLASMOID
  {
    name: "Plasmoid",
    subrace: "Standard",
    source: "SAiS",
    asi: "Choose +2 to one ability and +1 to another",
    speed: 30,
    size: "Small or Medium",
    traits: ["Amorphous", "Darkvision (60ft)", "Hold Breath (1 hour)", "Natural Resilience", "Shape Self"],
    languages: ["Common", "One extra"]
  },

  // THRI-KREEN
  {
    name: "Thri-kreen",
    subrace: "Standard",
    source: "SAiS",
    asi: "Choose +2 to one ability and +1 to another",
    speed: 30,
    size: "Small or Medium",
    traits: ["Chameleon Carapace", "Darkvision (60ft)", "Secondary Arms", "Sleepless", "Thri-kreen Telepathy"],
    languages: ["Common", "Telepathy"]
  },

  // CUSTOM LINEAGE (Tasha's)
  {
    name: "Custom Lineage",
    subrace: "Standard",
    source: "TCoE",
    asi: "+2 to one ability",
    speed: 30,
    size: "Small or Medium",
    traits: ["Feat", "Variable Trait (Darkvision or Skill proficiency)"],
    languages: ["Common", "One extra"]
  },

  // REBORN (Van Richten's)
  {
    name: "Reborn",
    subrace: "Standard",
    source: "VRGtR",
    asi: "Choose +2 to one ability and +1 to another OR +1 to three abilities",
    speed: 30,
    size: "Small or Medium",
    traits: ["Ancestral Legacy", "Deathless Nature", "Knowledge from a Past Life"],
    languages: ["Common", "One extra"]
  },

  // DHAMPIR (Van Richten's)
  {
    name: "Dhampir",
    subrace: "Standard",
    source: "VRGtR",
    asi: "Choose +2 to one ability and +1 to another OR +1 to three abilities",
    speed: 30,
    climbSpeed: 30,
    size: "Small or Medium",
    traits: ["Ancestral Legacy", "Deathless Nature", "Spider Climb", "Vampiric Bite"],
    languages: ["Common", "One extra"]
  },

  // HEXBLOOD (Van Richten's)
  {
    name: "Hexblood",
    subrace: "Standard",
    source: "VRGtR",
    asi: "Choose +2 to one ability and +1 to another OR +1 to three abilities",
    speed: 30,
    size: "Small or Medium",
    traits: ["Ancestral Legacy", "Darkvision (60ft)", "Fey Resilience", "Hex Magic", "Magic Token"],
    languages: ["Common", "One extra"],
    spells: ["Disguise Self (unlimited)", "Hex (1/LR)"]
  },

];

// EXPORT FOR USE
if (typeof module !== 'undefined' && module.exports) {
  module.exports = races;
}
