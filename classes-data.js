// D&D 5e Official Classes & Subclasses Database
// Sources: PHB, Xanathar's, Tasha's, SCAG, Adventure books

const classes = [
  // ===== ARTIFICER =====
  {
    name: "Artificer",
    source: "TCoE",
    hitDie: "1d8",
    primaryAbility: ["Intelligence"],
    saves: ["Constitution", "Intelligence"],
    armorProficiencies: ["Light armor", "Medium armor", "Shields"],
    weaponProficiencies: ["Simple weapons"],
    toolProficiencies: ["Thieves' tools", "Tinker's tools", "One artisan's tools"],
    skillChoices: 2,
    skillOptions: ["Arcana", "History", "Investigation", "Medicine", "Nature", "Perception", "Sleight of Hand"],
    subclasses: [
      {name: "Alchemist", source: "TCoE", level: 3},
      {name: "Armorer", source: "TCoE", level: 3},
      {name: "Artillerist", source: "TCoE", level: 3},
      {name: "Battle Smith", source: "TCoE", level: 3}
    ],
    spellcasting: "Intelligence",
    equipment: [
      "Any two simple weapons",
      "Light crossbow and 20 bolts",
      "Studded leather armor OR scale mail",
      "Thieves' tools and dungeoneer's pack"
    ]
  },

  // ===== BARBARIAN =====
  {
    name: "Barbarian",
    source: "PHB",
    hitDie: "1d12",
    primaryAbility: ["Strength"],
    saves: ["Strength", "Constitution"],
    armorProficiencies: ["Light armor", "Medium armor", "Shields"],
    weaponProficiencies: ["Simple weapons", "Martial weapons"],
    toolProficiencies: [],
    skillChoices: 2,
    skillOptions: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
    subclasses: [
      {name: "Path of the Berserker", source: "PHB", level: 3},
      {name: "Path of the Totem Warrior", source: "PHB", level: 3},
      {name: "Path of the Ancestral Guardian", source: "XGtE", level: 3},
      {name: "Path of the Storm Herald", source: "XGtE", level: 3},
      {name: "Path of the Zealot", source: "XGtE", level: 3},
      {name: "Path of the Beast", source: "TCoE", level: 3},
      {name: "Path of Wild Magic", source: "TCoE", level: 3},
      {name: "Path of the Battlerager", source: "SCAG", level: 3, restriction: "Dwarves only"},
      {name: "Path of the Giant", source: "BGG", level: 3},
      {name: "Path of the Juggernaut", source: "EGtW", level: 3}
    ],
    equipment: [
      "Greataxe OR any martial melee weapon",
      "Two handaxes OR any simple weapon",
      "Explorer's pack and four javelins"
    ]
  },

  // ===== BARD =====
  {
    name: "Bard",
    source: "PHB",
    hitDie: "1d8",
    primaryAbility: ["Charisma"],
    saves: ["Dexterity", "Charisma"],
    armorProficiencies: ["Light armor"],
    weaponProficiencies: ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
    toolProficiencies: ["Three musical instruments of your choice"],
    skillChoices: 3,
    skillOptions: "Any three",
    subclasses: [
      {name: "College of Lore", source: "PHB", level: 3},
      {name: "College of Valor", source: "PHB", level: 3},
      {name: "College of Glamour", source: "XGtE", level: 3},
      {name: "College of Swords", source: "XGtE", level: 3},
      {name: "College of Whispers", source: "XGtE", level: 3},
      {name: "College of Creation", source: "TCoE", level: 3},
      {name: "College of Eloquence", source: "TCoE", level: 3},
      {name: "College of Spirits", source: "VRGtR", level: 3}
    ],
    spellcasting: "Charisma",
    equipment: [
      "Rapier OR longsword OR any simple weapon",
      "Diplomat's pack OR entertainer's pack",
      "Lute OR any other musical instrument",
      "Leather armor and a dagger"
    ]
  },

  // ===== CLERIC =====
  {
    name: "Cleric",
    source: "PHB",
    hitDie: "1d8",
    primaryAbility: ["Wisdom"],
    saves: ["Wisdom", "Charisma"],
    armorProficiencies: ["Light armor", "Medium armor", "Shields"],
    weaponProficiencies: ["Simple weapons"],
    toolProficiencies: [],
    skillChoices: 2,
    skillOptions: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
    subclasses: [
      {name: "Knowledge Domain", source: "PHB", level: 1},
      {name: "Life Domain", source: "PHB", level: 1},
      {name: "Light Domain", source: "PHB", level: 1},
      {name: "Nature Domain", source: "PHB", level: 1},
      {name: "Tempest Domain", source: "PHB", level: 1},
      {name: "Trickery Domain", source: "PHB", level: 1},
      {name: "War Domain", source: "PHB", level: 1},
      {name: "Arcana Domain", source: "SCAG", level: 1},
      {name: "Death Domain", source: "DMG", level: 1},
      {name: "Forge Domain", source: "XGtE", level: 1},
      {name: "Grave Domain", source: "XGtE", level: 1},
      {name: "Order Domain", source: "TCoE", level: 1},
      {name: "Peace Domain", source: "TCoE", level: 1},
      {name: "Twilight Domain", source: "TCoE", level: 1}
    ],
    spellcasting: "Wisdom",
    equipment: [
      "Mace OR warhammer (if proficient)",
      "Scale mail OR leather armor OR chain mail (if proficient)",
      "Light crossbow and 20 bolts OR any simple weapon",
      "Priest's pack OR explorer's pack",
      "Shield and holy symbol"
    ]
  },

  // ===== DRUID =====
  {
    name: "Druid",
    source: "PHB",
    hitDie: "1d8",
    primaryAbility: ["Wisdom"],
    saves: ["Intelligence", "Wisdom"],
    armorProficiencies: ["Light armor (nonmetal)", "Medium armor (nonmetal)", "Shields (nonmetal)"],
    weaponProficiencies: ["Clubs", "Daggers", "Darts", "Javelins", "Maces", "Quarterstaffs", "Scimitars", "Sickles", "Slings", "Spears"],
    toolProficiencies: ["Herbalism kit"],
    skillChoices: 2,
    skillOptions: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
    subclasses: [
      {name: "Circle of the Land", source: "PHB", level: 2},
      {name: "Circle of the Moon", source: "PHB", level: 2},
      {name: "Circle of Dreams", source: "XGtE", level: 2},
      {name: "Circle of the Shepherd", source: "XGtE", level: 2},
      {name: "Circle of Spores", source: "TCoE", level: 2},
      {name: "Circle of Stars", source: "TCoE", level: 2},
      {name: "Circle of Wildfire", source: "TCoE", level: 2}
    ],
    spellcasting: "Wisdom",
    equipment: [
      "Wooden shield OR any simple weapon",
      "Scimitar OR any simple melee weapon",
      "Leather armor, explorer's pack, and druidic focus"
    ]
  },

  // ===== FIGHTER =====
  {
    name: "Fighter",
    source: "PHB",
    hitDie: "1d10",
    primaryAbility: ["Strength", "Dexterity"],
    saves: ["Strength", "Constitution"],
    armorProficiencies: ["All armor", "Shields"],
    weaponProficiencies: ["Simple weapons", "Martial weapons"],
    toolProficiencies: [],
    skillChoices: 2,
    skillOptions: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
    subclasses: [
      {name: "Champion", source: "PHB", level: 3},
      {name: "Battle Master", source: "PHB", level: 3},
      {name: "Eldritch Knight", source: "PHB", level: 3},
      {name: "Arcane Archer", source: "XGtE", level: 3},
      {name: "Cavalier", source: "XGtE", level: 3},
      {name: "Samurai", source: "XGtE", level: 3},
      {name: "Banneret (Purple Dragon Knight)", source: "SCAG", level: 3},
      {name: "Echo Knight", source: "EGtW", level: 3},
      {name: "Psi Warrior", source: "TCoE", level: 3},
      {name: "Rune Knight", source: "TCoE", level: 3}
    ],
    equipment: [
      "Chain mail OR leather armor, longbow, and 20 arrows",
      "Martial weapon and shield OR two martial weapons",
      "Light crossbow and 20 bolts OR two handaxes",
      "Dungeoneer's pack OR explorer's pack"
    ]
  },

  // ===== MONK =====
  {
    name: "Monk",
    source: "PHB",
    hitDie: "1d8",
    primaryAbility: ["Dexterity", "Wisdom"],
    saves: ["Strength", "Dexterity"],
    armorProficiencies: [],
    weaponProficiencies: ["Simple weapons", "Shortswords"],
    toolProficiencies: ["One artisan's tools or one musical instrument"],
    skillChoices: 2,
    skillOptions: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
    subclasses: [
      {name: "Way of the Open Hand", source: "PHB", level: 3},
      {name: "Way of Shadow", source: "PHB", level: 3},
      {name: "Way of the Four Elements", source: "PHB", level: 3},
      {name: "Way of the Drunken Master", source: "XGtE", level: 3},
      {name: "Way of the Kensei", source: "XGtE", level: 3},
      {name: "Way of the Sun Soul", source: "XGtE", level: 3},
      {name: "Way of the Astral Self", source: "TCoE", level: 3},
      {name: "Way of Mercy", source: "TCoE", level: 3},
      {name: "Way of the Long Death", source: "SCAG", level: 3},
      {name: "Way of the Ascendant Dragon", source: "FToD", level: 3}
    ],
    equipment: [
      "Shortsword OR any simple weapon",
      "Dungeoneer's pack OR explorer's pack",
      "10 darts"
    ]
  },

  // ===== PALADIN =====
  {
    name: "Paladin",
    source: "PHB",
    hitDie: "1d10",
    primaryAbility: ["Strength", "Charisma"],
    saves: ["Wisdom", "Charisma"],
    armorProficiencies: ["All armor", "Shields"],
    weaponProficiencies: ["Simple weapons", "Martial weapons"],
    toolProficiencies: [],
    skillChoices: 2,
    skillOptions: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
    subclasses: [
      {name: "Oath of Devotion", source: "PHB", level: 3},
      {name: "Oath of the Ancients", source: "PHB", level: 3},
      {name: "Oath of Vengeance", source: "PHB", level: 3},
      {name: "Oath of Conquest", source: "XGtE", level: 3},
      {name: "Oath of Redemption", source: "XGtE", level: 3},
      {name: "Oath of Glory", source: "TCoE", level: 3},
      {name: "Oath of the Watchers", source: "TCoE", level: 3},
      {name: "Oath of the Crown", source: "SCAG", level: 3},
      {name: "Oathbreaker", source: "DMG", level: 3}
    ],
    spellcasting: "Charisma",
    equipment: [
      "Martial weapon and shield OR two martial weapons",
      "Five javelins OR any simple melee weapon",
      "Priest's pack OR explorer's pack",
      "Chain mail and holy symbol"
    ]
  },

  // ===== RANGER =====
  {
    name: "Ranger",
    source: "PHB",
    hitDie: "1d10",
    primaryAbility: ["Dexterity", "Wisdom"],
    saves: ["Strength", "Dexterity"],
    armorProficiencies: ["Light armor", "Medium armor", "Shields"],
    weaponProficiencies: ["Simple weapons", "Martial weapons"],
    toolProficiencies: [],
    skillChoices: 3,
    skillOptions: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
    subclasses: [
      {name: "Hunter", source: "PHB", level: 3},
      {name: "Beast Master", source: "PHB", level: 3},
      {name: "Gloom Stalker", source: "XGtE", level: 3},
      {name: "Horizon Walker", source: "XGtE", level: 3},
      {name: "Monster Slayer", source: "XGtE", level: 3},
      {name: "Fey Wanderer", source: "TCoE", level: 3},
      {name: "Swarmkeeper", source: "TCoE", level: 3},
      {name: "Drakewarden", source: "FToD", level: 3}
    ],
    spellcasting: "Wisdom",
    equipment: [
      "Scale mail OR leather armor",
      "Two shortswords OR two simple melee weapons",
      "Dungeoneer's pack OR explorer's pack",
      "Longbow and quiver of 20 arrows"
    ]
  },

  // ===== ROGUE =====
  {
    name: "Rogue",
    source: "PHB",
    hitDie: "1d8",
    primaryAbility: ["Dexterity"],
    saves: ["Dexterity", "Intelligence"],
    armorProficiencies: ["Light armor"],
    weaponProficiencies: ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
    toolProficiencies: ["Thieves' tools"],
    skillChoices: 4,
    skillOptions: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
    subclasses: [
      {name: "Thief", source: "PHB", level: 3},
      {name: "Assassin", source: "PHB", level: 3},
      {name: "Arcane Trickster", source: "PHB", level: 3},
      {name: "Inquisitive", source: "XGtE", level: 3},
      {name: "Mastermind", source: "XGtE", level: 3},
      {name: "Scout", source: "XGtE", level: 3},
      {name: "Swashbuckler", source: "XGtE", level: 3},
      {name: "Phantom", source: "TCoE", level: 3},
      {name: "Soulknife", source: "TCoE", level: 3}
    ],
    equipment: [
      "Rapier OR shortsword",
      "Shortbow and quiver of 20 arrows OR shortsword",
      "Burglar's pack OR dungeoneer's pack OR explorer's pack",
      "Leather armor, two daggers, and thieves' tools"
    ]
  },

  // ===== SORCERER =====
  {
    name: "Sorcerer",
    source: "PHB",
    hitDie: "1d6",
    primaryAbility: ["Charisma"],
    saves: ["Constitution", "Charisma"],
    armorProficiencies: [],
    weaponProficiencies: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
    toolProficiencies: [],
    skillChoices: 2,
    skillOptions: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
    subclasses: [
      {name: "Draconic Bloodline", source: "PHB", level: 1},
      {name: "Wild Magic", source: "PHB", level: 1},
      {name: "Divine Soul", source: "XGtE", level: 1},
      {name: "Shadow Magic", source: "XGtE", level: 1},
      {name: "Storm Sorcery", source: "XGtE", level: 1},
      {name: "Aberrant Mind", source: "TCoE", level: 1},
      {name: "Clockwork Soul", source: "TCoE", level: 1},
      {name: "Lunar Sorcery", source: "DSotDQ", level: 1}
    ],
    spellcasting: "Charisma",
    equipment: [
      "Light crossbow and 20 bolts OR any simple weapon",
      "Component pouch OR arcane focus",
      "Dungeoneer's pack OR explorer's pack",
      "Two daggers"
    ]
  },

  // ===== WARLOCK =====
  {
    name: "Warlock",
    source: "PHB",
    hitDie: "1d8",
    primaryAbility: ["Charisma"],
    saves: ["Wisdom", "Charisma"],
    armorProficiencies: ["Light armor"],
    weaponProficiencies: ["Simple weapons"],
    toolProficiencies: [],
    skillChoices: 2,
    skillOptions: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
    subclasses: [
      {name: "The Archfey", source: "PHB", level: 1},
      {name: "The Fiend", source: "PHB", level: 1},
      {name: "The Great Old One", source: "PHB", level: 1},
      {name: "The Celestial", source: "XGtE", level: 1},
      {name: "The Hexblade", source: "XGtE", level: 1},
      {name: "The Fathomless", source: "TCoE", level: 1},
      {name: "The Genie", source: "TCoE", level: 1},
      {name: "The Undead", source: "VRGtR", level: 1},
      {name: "The Undying", source: "SCAG", level: 1}
    ],
    spellcasting: "Charisma",
    pactMagic: true,
    equipment: [
      "Light crossbow and 20 bolts OR any simple weapon",
      "Component pouch OR arcane focus",
      "Scholar's pack OR dungeoneer's pack",
      "Leather armor, any simple weapon, and two daggers"
    ]
  },

  // ===== WIZARD =====
  {
    name: "Wizard",
    source: "PHB",
    hitDie: "1d6",
    primaryAbility: ["Intelligence"],
    saves: ["Intelligence", "Wisdom"],
    armorProficiencies: [],
    weaponProficiencies: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
    toolProficiencies: [],
    skillChoices: 2,
    skillOptions: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
    subclasses: [
      {name: "School of Abjuration", source: "PHB", level: 2},
      {name: "School of Conjuration", source: "PHB", level: 2},
      {name: "School of Divination", source: "PHB", level: 2},
      {name: "School of Enchantment", source: "PHB", level: 2},
      {name: "School of Evocation", source: "PHB", level: 2},
      {name: "School of Illusion", source: "PHB", level: 2},
      {name: "School of Necromancy", source: "PHB", level: 2},
      {name: "School of Transmutation", source: "PHB", level: 2},
      {name: "Bladesinging", source: "TCoE", level: 2},
      {name: "War Magic", source: "XGtE", level: 2},
      {name: "Chronurgy Magic", source: "EGtW", level: 2},
      {name: "Graviturgy Magic", source: "EGtW", level: 2},
      {name: "Order of Scribes", source: "TCoE", level: 2}
    ],
    spellcasting: "Intelligence",
    equipment: [
      "Quarterstaff OR dagger",
      "Component pouch OR arcane focus",
      "Scholar's pack OR explorer's pack",
      "Spellbook"
    ]
  },

  // ===== BLOOD HUNTER (Critical Role/Matt Mercer) =====
  {
    name: "Blood Hunter",
    source: "Critical Role",
    unofficial: true,
    hitDie: "1d10",
    primaryAbility: ["Strength", "Dexterity"],
    saves: ["Dexterity", "Intelligence"],
    armorProficiencies: ["Light armor", "Medium armor", "Shields"],
    weaponProficiencies: ["Simple weapons", "Martial weapons"],
    toolProficiencies: ["Alchemist's supplies"],
    skillChoices: 3,
    skillOptions: ["Acrobatics", "Athletics", "Arcana", "History", "Insight", "Investigation", "Religion", "Survival"],
    subclasses: [
      {name: "Order of the Ghostslayer", source: "CR", level: 3},
      {name: "Order of the Lycan", source: "CR", level: 3},
      {name: "Order of the Mutant", source: "CR", level: 3},
      {name: "Order of the Profane Soul", source: "CR", level: 3}
    ],
    equipment: [
      "Scale mail OR studded leather armor",
      "Martial weapon OR two simple weapons",
      "Light crossbow and 20 bolts OR hand crossbow and 20 bolts",
      "Explorer's pack"
    ]
  }
];

// EXPORT FOR USE
if (typeof module !== 'undefined' && module.exports) {
  module.exports = classes;
}
