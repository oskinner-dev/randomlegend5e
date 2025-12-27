// D&D 5e Official Backgrounds Database
// Sources: PHB, SCAG, CoS, SKT, ToA, WDH, BGDIA, EGtW, AI, MOoT, WBtW, SCC

const backgrounds = [
  // ===== PHB BACKGROUNDS =====
  {
    name: "Acolyte",
    source: "PHB",
    skillProficiencies: ["Insight", "Religion"],
    toolProficiencies: [],
    languages: 2,
    equipment: [
      "Holy symbol (gift from temple)",
      "Prayer book or prayer wheel",
      "5 sticks of incense",
      "Vestments",
      "Common clothes",
      "Belt pouch with 15 gp"
    ],
    feature: "Shelter of the Faithful",
    featureDescription: "You and your companions can receive free healing and care at temples, shrines, and other religious establishments of your faith. You can also receive assistance from priests."
  },

  {
    name: "Charlatan",
    source: "PHB",
    skillProficiencies: ["Deception", "Sleight of Hand"],
    toolProficiencies: ["Disguise kit", "Forgery kit"],
    languages: 0,
    equipment: [
      "Fine clothes",
      "Disguise kit",
      "Tools of con (ten stoppered bottles, weighted dice, signaling cards, signet ring)",
      "Belt pouch with 15 gp"
    ],
    feature: "False Identity",
    featureDescription: "You have created a second identity with documentation, disguises, and contacts. You can forge documents and adopt false identities."
  },

  {
    name: "Criminal",
    source: "PHB",
    skillProficiencies: ["Deception", "Stealth"],
    toolProficiencies: ["One type of gaming set", "Thieves' tools"],
    languages: 0,
    equipment: [
      "Crowbar",
      "Dark common clothes with hood",
      "Belt pouch with 15 gp"
    ],
    feature: "Criminal Contact",
    featureDescription: "You have a reliable contact in the criminal underworld who acts as your liaison to a network of other criminals.",
    variant: "Spy"
  },

  {
    name: "Entertainer",
    source: "PHB",
    skillProficiencies: ["Acrobatics", "Performance"],
    toolProficiencies: ["Disguise kit", "One type of musical instrument"],
    languages: 0,
    equipment: [
      "Musical instrument (one of your choice)",
      "Favor of an admirer (love letter, lock of hair, trinket)",
      "Costume",
      "Belt pouch with 15 gp"
    ],
    feature: "By Popular Demand",
    featureDescription: "You can find a place to perform in any town or village, receiving free lodging and food. Your performances attract crowds and attention.",
    variant: "Gladiator"
  },

  {
    name: "Folk Hero",
    source: "PHB",
    skillProficiencies: ["Animal Handling", "Survival"],
    toolProficiencies: ["One type of artisan's tools", "Vehicles (land)"],
    languages: 0,
    equipment: [
      "Set of artisan's tools (one of your choice)",
      "Shovel",
      "Iron pot",
      "Common clothes",
      "Belt pouch with 10 gp"
    ],
    feature: "Rustic Hospitality",
    featureDescription: "Common folk will shelter and hide you, refusing to turn you over to authorities. They will provide food and simple lodging."
  },

  {
    name: "Guild Artisan",
    source: "PHB",
    skillProficiencies: ["Insight", "Persuasion"],
    toolProficiencies: ["One type of artisan's tools"],
    languages: 1,
    equipment: [
      "Set of artisan's tools (one of your choice)",
      "Letter of introduction from your guild",
      "Traveler's clothes",
      "Belt pouch with 15 gp"
    ],
    feature: "Guild Membership",
    featureDescription: "You can rely on your guild for lodging, food, and legal support. Guild members will provide shelter and assistance.",
    variant: "Guild Merchant"
  },

  {
    name: "Hermit",
    source: "PHB",
    skillProficiencies: ["Medicine", "Religion"],
    toolProficiencies: ["Herbalism kit"],
    languages: 1,
    equipment: [
      "Scroll case with notes from studies",
      "Winter blanket",
      "Common clothes",
      "Herbalism kit",
      "5 gp"
    ],
    feature: "Discovery",
    featureDescription: "Your seclusion gave you access to unique and powerful knowledge - you discovered a great truth about the cosmos, nature, or divine forces."
  },

  {
    name: "Noble",
    source: "PHB",
    skillProficiencies: ["History", "Persuasion"],
    toolProficiencies: ["One type of gaming set"],
    languages: 1,
    equipment: [
      "Fine clothes",
      "Signet ring",
      "Scroll of pedigree",
      "Purse with 25 gp"
    ],
    feature: "Position of Privilege",
    featureDescription: "People are inclined to think the best of you. You're welcome in high society, and commoners make efforts to accommodate you.",
    variant: "Knight"
  },

  {
    name: "Outlander",
    source: "PHB",
    skillProficiencies: ["Athletics", "Survival"],
    toolProficiencies: ["One type of musical instrument"],
    languages: 1,
    equipment: [
      "Staff",
      "Hunting trap",
      "Trophy from animal you killed",
      "Traveler's clothes",
      "Belt pouch with 10 gp"
    ],
    feature: "Wanderer",
    featureDescription: "You have excellent memory for maps and geography. You can find food and fresh water for yourself and up to five others each day."
  },

  {
    name: "Sage",
    source: "PHB",
    skillProficiencies: ["Arcana", "History"],
    toolProficiencies: [],
    languages: 2,
    equipment: [
      "Bottle of black ink",
      "Quill",
      "Small knife",
      "Letter from dead colleague with unanswered question",
      "Common clothes",
      "Belt pouch with 10 gp"
    ],
    feature: "Researcher",
    featureDescription: "You know how to obtain information from libraries, scriptoriums, universities, and sages. You know where to find knowledge."
  },

  {
    name: "Sailor",
    source: "PHB",
    skillProficiencies: ["Athletics", "Perception"],
    toolProficiencies: ["Navigator's tools", "Vehicles (water)"],
    languages: 0,
    equipment: [
      "Belaying pin (club)",
      "50 feet of silk rope",
      "Lucky charm",
      "Common clothes",
      "Belt pouch with 10 gp"
    ],
    feature: "Ship's Passage",
    featureDescription: "You can secure free passage on sailing ships for yourself and companions. You travel in comparable comfort to crew.",
    variant: "Pirate"
  },

  {
    name: "Soldier",
    source: "PHB",
    skillProficiencies: ["Athletics", "Intimidation"],
    toolProficiencies: ["One type of gaming set", "Vehicles (land)"],
    languages: 0,
    equipment: [
      "Insignia of rank",
      "Trophy from fallen enemy",
      "Bone dice or deck of cards",
      "Common clothes",
      "Belt pouch with 10 gp"
    ],
    feature: "Military Rank",
    featureDescription: "Soldiers recognize your authority and influence. You can invoke rank to gain temporary command or access to military facilities."
  },

  {
    name: "Urchin",
    source: "PHB",
    skillProficiencies: ["Sleight of Hand", "Stealth"],
    toolProficiencies: ["Disguise kit", "Thieves' tools"],
    languages: 0,
    equipment: [
      "Small knife",
      "Map of city you grew up in",
      "Pet mouse",
      "Token from parents",
      "Common clothes",
      "Belt pouch with 10 gp"
    ],
    feature: "City Secrets",
    featureDescription: "You know the secret patterns of city alleys and can travel twice as fast through cities. You know how to find hidden passages."
  },

  // ===== SWORD COAST ADVENTURER'S GUIDE =====
  {
    name: "City Watch",
    source: "SCAG",
    skillProficiencies: ["Athletics", "Insight"],
    toolProficiencies: [],
    languages: 2,
    equipment: [
      "Uniform",
      "Insignia of rank",
      "Horn",
      "Manacles",
      "Belt pouch with 10 gp"
    ],
    feature: "Watcher's Eye",
    featureDescription: "You have keen awareness of local laws and can spot illegal activity. Guards and watch recognize your authority."
  },

  {
    name: "Clan Crafter",
    source: "SCAG",
    skillProficiencies: ["History", "Insight"],
    toolProficiencies: ["One type of artisan's tools"],
    languages: 1,
    equipment: [
      "Artisan's tools",
      "Maker's mark chisel",
      "Traveler's clothes",
      "Belt pouch with 5 gp and gem worth 10 gp"
    ],
    feature: "Respect of the Stout Folk",
    featureDescription: "Dwarves treat you as family. You receive shelter, food, and assistance from dwarven communities."
  },

  {
    name: "Cloistered Scholar",
    source: "SCAG",
    skillProficiencies: ["History"],
    toolProficiencies: [],
    languages: 2,
    skillChoice: "Choose one from Arcana, Nature, or Religion",
    equipment: [
      "Scholar's robes",
      "Writing kit (ink, quill, parchment)",
      "Borrowed book",
      "Belt pouch with 10 gp"
    ],
    feature: "Library Access",
    featureDescription: "You have access to libraries and can quickly research information. Librarians and scholars provide assistance."
  },

  {
    name: "Courtier",
    source: "SCAG",
    skillProficiencies: ["Insight", "Persuasion"],
    toolProficiencies: [],
    languages: 2,
    equipment: [
      "Fine clothes",
      "Belt pouch with 5 gp"
    ],
    feature: "Court Functionary",
    featureDescription: "You know how bureaucracies work and can navigate noble courts. You have connections to gain audiences with nobles."
  },

  {
    name: "Faction Agent",
    source: "SCAG",
    skillProficiencies: ["Insight"],
    toolProficiencies: [],
    languages: 2,
    skillChoice: "Choose one from your faction's list",
    equipment: [
      "Badge or emblem of your faction",
      "Copy of seminal faction text",
      "Common clothes",
      "Belt pouch with 15 gp"
    ],
    feature: "Safe Haven",
    featureDescription: "Your faction provides safe houses and assistance. Faction members offer shelter and aid."
  },

  {
    name: "Far Traveler",
    source: "SCAG",
    skillProficiencies: ["Insight", "Perception"],
    toolProficiencies: ["One musical instrument or gaming set"],
    languages: 1,
    equipment: [
      "Traveler's clothes",
      "Musical instrument or gaming set",
      "Maps from homeland",
      "Small piece of jewelry worth 10 gp",
      "Belt pouch with 5 gp"
    ],
    feature: "All Eyes on You",
    featureDescription: "Your foreign appearance attracts attention. People are curious about you and may offer hospitality or seek your tales."
  },

  {
    name: "Inheritor",
    source: "SCAG",
    skillProficiencies: ["Survival"],
    toolProficiencies: ["One gaming set or musical instrument"],
    languages: 1,
    skillChoice: "Choose one from Arcana, History, or Religion",
    equipment: [
      "Inheritance (consult DM)",
      "Traveler's clothes",
      "Tool of your chosen skill",
      "Belt pouch with 15 gp"
    ],
    feature: "Inheritance",
    featureDescription: "You inherited something important - an item, knowledge, or responsibility. It may attract attention or danger."
  },

  {
    name: "Knight of the Order",
    source: "SCAG",
    skillProficiencies: ["Persuasion"],
    toolProficiencies: ["One type of gaming set or musical instrument"],
    languages: 1,
    skillChoice: "Choose one from Arcana, History, Nature, or Religion",
    equipment: [
      "Traveler's clothes",
      "Signet, banner, or seal of your order",
      "Belt pouch with 10 gp"
    ],
    feature: "Knightly Regard",
    featureDescription: "Knights and nobles recognize your service. You receive shelter from those who support your order."
  },

  {
    name: "Mercenary Veteran",
    source: "SCAG",
    skillProficiencies: ["Athletics", "Persuasion"],
    toolProficiencies: ["One type of gaming set", "Vehicles (land)"],
    languages: 0,
    equipment: [
      "Uniform of company",
      "Insignia of rank",
      "Gaming set",
      "Belt pouch with 10 gp"
    ],
    feature: "Mercenary Life",
    featureDescription: "You know the mercenary trade. You can identify mercenary companies and find mercenary work."
  },

  {
    name: "Urban Bounty Hunter",
    source: "SCAG",
    skillProficiencies: [],
    toolProficiencies: ["Two tools from: gaming set, musical instrument, or thieves' tools"],
    languages: 0,
    skillChoice: "Choose two from Deception, Insight, Persuasion, or Stealth",
    equipment: [
      "Appropriate clothing",
      "Belt pouch with 20 gp"
    ],
    feature: "Ear to the Ground",
    featureDescription: "You have contacts in cities who provide information about people and activities. You can find bounties and targets."
  },

  {
    name: "Uthgardt Tribe Member",
    source: "SCAG",
    skillProficiencies: ["Athletics", "Survival"],
    toolProficiencies: ["One type of musical instrument or artisan's tools"],
    languages: 1,
    equipment: [
      "Hunting trap",
      "Totemic token",
      "Traveler's clothes",
      "Belt pouch with 10 gp"
    ],
    feature: "Uthgardt Heritage",
    featureDescription: "Uthgardt tribes recognize your heritage. You receive shelter and assistance from tribal members."
  },

  {
    name: "Waterdhavian Noble",
    source: "SCAG",
    skillProficiencies: ["History", "Persuasion"],
    toolProficiencies: ["One type of gaming set or musical instrument"],
    languages: 1,
    equipment: [
      "Fine clothes",
      "Signet ring",
      "Scroll of pedigree",
      "Skin of fine wine",
      "Purse with 20 gp"
    ],
    feature: "Kept in Style",
    featureDescription: "You have servants and live in maintained estates. You're welcome in high society and nobility provides assistance."
  },

  // ===== CURSE OF STRAHD =====
  {
    name: "Haunted One",
    source: "CoS",
    skillProficiencies: [],
    toolProficiencies: [],
    languages: 2,
    skillChoice: "Choose two from Arcana, Investigation, Religion, or Survival",
    equipment: [
      "Monster hunter's pack",
      "Gothic trinket",
      "Common clothes",
      "1 sp"
    ],
    feature: "Heart of Darkness",
    featureDescription: "Commoners sense your connection to darkness and will help you, hoping you'll protect them from evil."
  },

  // ===== STORM KING'S THUNDER =====
  {
    name: "Giant Foundling",
    source: "SKT",
    skillProficiencies: ["Intimidation", "Survival"],
    toolProficiencies: [],
    languages: 1,
    languageChoice: "Giant",
    equipment: [
      "Backpack",
      "Traveler's clothes",
      "Small stone from giant foster parent",
      "Belt pouch with 10 gp"
    ],
    feature: "Strike of the Giants",
    featureDescription: "You have advantage on Strength (Athletics) checks and can use Strength to make unarmed strikes dealing 1d6 + Str damage."
  },

  // ===== TOMB OF ANNIHILATION =====
  {
    name: "Anthropologist",
    source: "ToA",
    skillProficiencies: ["Insight", "Religion"],
    toolProficiencies: [],
    languages: 2,
    equipment: [
      "Leather-bound diary",
      "Bottle of ink",
      "Ink pen",
      "Traveler's clothes",
      "Trinket from culture studied",
      "Belt pouch with 10 gp"
    ],
    feature: "Adept Linguist",
    featureDescription: "You can communicate basic ideas with creatures that don't share a language. You quickly learn new languages."
  },

  {
    name: "Archaeologist",
    source: "ToA",
    skillProficiencies: ["History", "Survival"],
    toolProficiencies: ["Cartographer's tools or navigator's tools"],
    languages: 1,
    equipment: [
      "Wooden case with map to ruin",
      "Bullseye lantern",
      "Miner's pick",
      "Traveler's clothes",
      "Shovel",
      "Two-person tent",
      "Trinket from excavation",
      "Belt pouch with 25 gp"
    ],
    feature: "Historical Knowledge",
    featureDescription: "You can identify age and origin of structures and artifacts. You know locations of ruins and archaeological sites."
  },

  // ===== WATERDEEP: DRAGON HEIST =====
  {
    name: "Waterdeep: City Watch",
    source: "WDH",
    skillProficiencies: ["Athletics", "Insight"],
    toolProficiencies: [],
    languages: 2,
    equipment: [
      "Uniform",
      "Insignia of rank",
      "Horn",
      "Manacles",
      "Belt pouch with 10 gp"
    ],
    feature: "Watcher's Eye",
    featureDescription: "You recognize criminals and illegal activity in Waterdeep. City watch provides assistance."
  },

  // ===== BALDUR'S GATE: DESCENT INTO AVERNUS =====
  {
    name: "Faceless",
    source: "BGDIA",
    skillProficiencies: ["Deception", "Intimidation"],
    toolProficiencies: ["Disguise kit"],
    languages: 1,
    equipment: [
      "Disguise kit",
      "Costume",
      "Belt pouch with 10 gp"
    ],
    feature: "Dual Personalities",
    featureDescription: "You have created a persona that strikes fear or awe. When in persona, people react differently to you."
  },

  // ===== EXPLORER'S GUIDE TO WILDEMOUNT =====
  {
    name: "Grinner",
    source: "EGtW",
    skillProficiencies: ["Deception", "Performance"],
    toolProficiencies: ["One musical instrument", "Disguise kit"],
    languages: 0,
    equipment: [
      "Musical instrument",
      "Disguise kit",
      "Gold-lined symbol of Asmodeus",
      "Traveler's clothes",
      "Belt pouch with 15 gp"
    ],
    feature: "Ballad of the Grinning Fool",
    featureDescription: "You can find refuge and assistance from Golden Grin members through secret signals and codes."
  },

  {
    name: "Volstrucker Agent",
    source: "EGtW",
    skillProficiencies: ["Deception", "Stealth"],
    toolProficiencies: ["Poisoner's kit"],
    languages: 1,
    equipment: [
      "Poisoner's kit",
      "Common clothes",
      "Black cloak with hood",
      "Belt pouch with 10 gp"
    ],
    feature: "Shadow Network",
    featureDescription: "You can call upon Volstrucker agents for information and assistance in Dwendalian Empire territories."
  },

  // ===== ACQUISITIONS INCORPORATED =====
  {
    name: "Corporate Agent",
    source: "AI",
    skillProficiencies: ["Investigation", "Persuasion"],
    toolProficiencies: [],
    languages: 0,
    skillChoice: "Choose one tool proficiency",
    equipment: [
      "Fine clothes",
      "Business card",
      "Belt pouch with 10 gp"
    ],
    feature: "Position of Privilege (Corporate)",
    featureDescription: "Your corporate position grants you respect and access. You can leverage company resources for assistance."
  },

  // ===== MYTHIC ODYSSEYS OF THEROS =====
  {
    name: "Athlete",
    source: "MOoT",
    skillProficiencies: ["Acrobatics", "Athletics"],
    toolProficiencies: ["Vehicles (land)"],
    languages: 1,
    equipment: [
      "Bronze discus or leather ball",
      "Lucky charm or past trophy",
      "Traveler's clothes",
      "Belt pouch with 10 gp"
    ],
    feature: "Echoes of Victory",
    featureDescription: "You can find free lodging and food at athletic venues. Fans recognize you and may offer assistance."
  },

  // ===== WILD BEYOND THE WITCHLIGHT =====
  {
    name: "Witchlight Hand",
    source: "WBtW",
    skillProficiencies: ["Performance", "Sleight of Hand"],
    toolProficiencies: ["Disguise kit or musical instrument"],
    languages: 1,
    equipment: [
      "Disguise kit or musical instrument",
      "Deck of cards",
      "Carnival costume or common clothes",
      "Feywild trinket",
      "Belt pouch with 8 gp"
    ],
    feature: "Carnival Fixture",
    featureDescription: "You're recognized by Witchlight Carnival. Staff provide food, lodging, and assistance when carnival is in town."
  },

  // ===== STRIXHAVEN: CURRICULUM OF CHAOS =====
  {
    name: "Strixhaven Student",
    source: "SCC",
    skillProficiencies: [],
    toolProficiencies: [],
    languages: 2,
    skillChoice: "Choose two from Arcana, History, Investigation, Nature, Religion",
    equipment: [
      "Bottle of black ink",
      "Ink pen",
      "School uniform",
      "Student ID",
      "Belt pouch with 10 gp"
    ],
    feature: "Strixhaven Initiate",
    featureDescription: "You gain access to Strixhaven facilities and can leverage student status. Choose a college for additional benefits.",
    collegeChoice: "Lorehold, Prismari, Quandrix, Silverquill, or Witherbloom"
  }
];

// EXPORT FOR USE
if (typeof module !== 'undefined' && module.exports) {
  module.exports = backgrounds;
}
