// =====================================================
// RANDOMLEGEND 5E - MAIN APPLICATION
// Uses FULL race/class/background data from external files
// =====================================================

// ===== GLOBAL STATE =====
let currentCharacter = null;
let currentTheme = 'fantasy';
let currentLang = 'en';

// ===== DATA LOADED FROM EXTERNAL FILES =====
// races array from races-data.js
// classes array from classes-data.js  
// backgrounds array from backgrounds-data.js

const RACES_DATA = races; // From races-data.js
const CLASSES_DATA = classes; // From classes-data.js
const BACKGROUNDS_DATA = backgrounds; // From backgrounds-data.js

console.log(`✅ Loaded ${RACES_DATA.length} races, ${CLASSES_DATA.length} classes, ${BACKGROUNDS_DATA.length} backgrounds`);

// ===== PERSONALITY & NAME DATA =====
const PERSONALITY_TRAITS = [
    "I idolize a particular hero and constantly refer to their deeds.",
    "I can find common ground between the fiercest enemies.",
    "I'm always picking things up, absently fiddling with them.",
    "I have a crude sense of humor.",
    "I'm confident in my own abilities and do what I can to instill confidence in others.",
    "I face problems head-on. A simple, direct solution is the best path to success.",
    "I'm always polite and respectful.",
    "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
    "I've lost too many friends, and I'm slow to make new ones.",
    "I'm quick to assume that someone is trying to cheat me.",
    "I am suspicious of strangers and expect the worst of them.",
    "Once someone questions my courage, I never back down.",
];

const NAMES = {
    human: ["Alric", "Brenna", "Cedric", "Diana", "Erik", "Fiona", "Garrett", "Helena", "Ivan", "Jade"],
    dwarf: ["Thorin", "Dain", "Gimli", "Balin", "Dwalin", "Nori", "Dori", "Gloin", "Bombur", "Bofur"],
    elf: ["Legolas", "Arwen", "Elrond", "Galadriel", "Thranduil", "Tauriel", "Celeborn", "Haldir"],
    halfling: ["Bilbo", "Frodo", "Samwise", "Merry", "Pippin", "Rosie", "Lobelia", "Otho"],
    dragonborn: ["Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash"],
    gnome: ["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky"],
    default: ["Aric", "Bran", "Cal", "Dex", "Echo", "Finn", "Gage", "Haven", "Iris", "Jax"]
};

// ===== UTILITY FUNCTIONS =====
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function roll4d6DropLowest() {
    const rolls = [rollDice(6), rollDice(6), rollDice(6), rollDice(6)];
    rolls.sort((a, b) => a - b);
    rolls.shift();
    return rolls.reduce((a, b) => a + b, 0);
}

function getModifier(score) {
    return Math.floor((score - 10) / 2);
}

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function showDiceAnimation(result) {
    const roller = document.getElementById('dice-roller');
    const display = document.getElementById('dice-display');
    roller.classList.add('active');
    display.textContent = result;
    setTimeout(() => roller.classList.remove('active'), 1000);
}

// ===== THEME & LANGUAGE =====
function toggleTheme() {
    // Fantasy theme is default, could add dark mode variant
    alert('Theme customization coming soon!');
}

function toggleLang() {
    currentLang = currentLang === 'en' ? 'th' : 'en';
    const btn = document.querySelector('.lang-toggle');
    btn.textContent = currentLang === 'en' ? '🌐 EN' : '🌐 TH';
}

// ===== INDIVIDUAL RANDOMIZERS =====
function randomizeRace() {
    const race = randomChoice(RACES_DATA);
    const asiText = typeof race.asi === 'object' 
        ? Object.entries(race.asi).map(([stat, val]) => `${stat.toUpperCase()} +${val}`).join(', ')
        : race.asi;
    
    const display = `<strong>${race.name} (${race.subrace})</strong><br>
        <span class="badge">${race.source}</span><br>
        Speed: ${race.speed}ft • Size: ${race.size}<br>
        ASI: ${asiText}<br>
        Traits: ${race.traits.join(', ')}`;
    
    document.getElementById('race-result').innerHTML = display;
    document.getElementById('race-result').classList.add('filled');
    showDiceAnimation('🧝');
}

function randomizeClass() {
    const cls = randomChoice(CLASSES_DATA);
    const subclass = randomChoice(cls.subclasses);
    const subclassName = typeof subclass === 'object' ? subclass.name : subclass;
    
    const display = `<strong>${cls.name}</strong><br>
        Subclass: ${subclassName}<br>
        Hit Die: ${cls.hitDie} • Primary: ${cls.primaryAbility.join(' or ')}<br>
        Saves: ${cls.saves.join(', ')}`;
    
    document.getElementById('class-result').innerHTML = display;
    document.getElementById('class-result').classList.add('filled');
    showDiceAnimation('⚔️');
}

function randomizeBackground() {
    const bg = randomChoice(BACKGROUNDS_DATA);
    const display = `<strong>${bg.name}</strong><br>
        <span class="badge">${bg.source}</span><br>
        Skills: ${bg.skillProficiencies.join(', ')}<br>
        Feature: ${bg.feature}`;
    
    document.getElementById('background-result').innerHTML = display;
    document.getElementById('background-result').classList.add('filled');
    showDiceAnimation('📜');
}

function randomizeStats() {
    const stats = {
        str: roll4d6DropLowest(),
        dex: roll4d6DropLowest(),
        con: roll4d6DropLowest(),
        int: roll4d6DropLowest(),
        wis: roll4d6DropLowest(),
        cha: roll4d6DropLowest()
    };
    
    const display = `<strong>4d6 Drop Lowest:</strong><br>
        STR: ${stats.str} (${getModifier(stats.str) >= 0 ? '+' : ''}${getModifier(stats.str)})<br>
        DEX: ${stats.dex} (${getModifier(stats.dex) >= 0 ? '+' : ''}${getModifier(stats.dex)})<br>
        CON: ${stats.con} (${getModifier(stats.con) >= 0 ? '+' : ''}${getModifier(stats.con)})<br>
        INT: ${stats.int} (${getModifier(stats.int) >= 0 ? '+' : ''}${getModifier(stats.int)})<br>
        WIS: ${stats.wis} (${getModifier(stats.wis) >= 0 ? '+' : ''}${getModifier(stats.wis)})<br>
        CHA: ${stats.cha} (${getModifier(stats.cha) >= 0 ? '+' : ''}${getModifier(stats.cha)})`;
    
    document.getElementById('stats-result').innerHTML = display;
    document.getElementById('stats-result').classList.add('filled');
    showDiceAnimation('🎲');
}

function randomizePersonality() {
    const trait = randomChoice(PERSONALITY_TRAITS);
    document.getElementById('personality-result').innerHTML = `<strong>"${trait}"</strong>`;
    document.getElementById('personality-result').classList.add('filled');
    showDiceAnimation('🎭');
}

function randomizeName() {
    const nameList = randomChoice([NAMES.human, NAMES.dwarf, NAMES.elf, NAMES.halfling, NAMES.dragonborn, NAMES.gnome, NAMES.default]);
    const name = randomChoice(nameList);
    document.getElementById('name-result').innerHTML = `<strong>${name}</strong>`;
    document.getElementById('name-result').classList.add('filled');
    showDiceAnimation('✨');
}

// ===== FULL CHARACTER GENERATION =====
function generateFullCharacter() {
    const race = randomChoice(RACES_DATA);
    const cls = randomChoice(CLASSES_DATA);
    const subclass = randomChoice(cls.subclasses);
    const subclassName = typeof subclass === 'object' ? subclass.name : subclass;
    const background = randomChoice(BACKGROUNDS_DATA);
    
    // Generate base stats
    const baseStats = {
        str: roll4d6DropLowest(),
        dex: roll4d6DropLowest(),
        con: roll4d6DropLowest(),
        int: roll4d6DropLowest(),
        wis: roll4d6DropLowest(),
        cha: roll4d6DropLowest()
    };

    // Apply racial ASI
    const finalStats = {...baseStats};
    if (typeof race.asi === 'object') {
        Object.keys(race.asi).forEach(stat => {
            finalStats[stat] = (finalStats[stat] || 0) + race.asi[stat];
        });
    }

    // Calculate HP
    const hitDieValue = parseInt(cls.hitDie.substring(1));
    const hp = hitDieValue + getModifier(finalStats.con);

    // Generate name
    const raceName = race.name.toLowerCase();
    const nameList = NAMES[raceName] || NAMES.default;
    const charName = randomChoice(nameList);

    // Create character
    currentCharacter = {
        name: charName,
        race: race,
        class: cls,
        subclass: subclassName,
        background: background,
        stats: finalStats,
        hp: hp,
        level: 1
    };

    displayCharacterSheet();
}

function displayCharacterSheet() {
    const char = currentCharacter;
    
    // Update header
    document.getElementById('char-name').textContent = char.name;
    document.getElementById('char-subtitle').textContent = 
        `Level ${char.level} ${char.race.name} (${char.race.subrace}) ${char.class.name} (${char.subclass})`;

    // Update stats
    ['str', 'dex', 'con', 'int', 'wis', 'cha'].forEach(stat => {
        const value = char.stats[stat];
        const modifier = getModifier(value);
        document.getElementById(`stat-${stat}`).textContent = value;
        document.getElementById(`mod-${stat}`).textContent = 
            `${modifier >= 0 ? '+' : ''}${modifier}`;
    });

    // Update core info
    document.getElementById('char-hp').textContent = char.hp;
    document.getElementById('char-ac').textContent = 10 + getModifier(char.stats.dex);
    document.getElementById('char-speed').textContent = `${char.race.speed} ft`;
    document.getElementById('char-initiative').textContent = 
        `${getModifier(char.stats.dex) >= 0 ? '+' : ''}${getModifier(char.stats.dex)}`;
    document.getElementById('char-hitdie').textContent = char.class.hitDie;

    // Update racial traits
    const traitsHtml = char.race.traits.map(trait => `<li>${trait}</li>`).join('');
    document.getElementById('racial-traits').innerHTML = traitsHtml;

    // Update class features
    const features = [
        `${char.class.name} Level 1 Features`,
        `Hit Die: ${char.class.hitDie}`,
        `Primary Abilities: ${char.class.primaryAbility.join(', ')}`,
        `Saving Throws: ${char.class.saves.join(', ')}`
    ];
    const featuresHtml = features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('class-features').innerHTML = featuresHtml;

    // Update proficiencies
    const profHtml = `
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">Saving Throws</div>
                <div class="info-value">${char.class.saves.join(', ')}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Skills</div>
                <div class="info-value">${char.background.skillProficiencies.join(', ')}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Languages</div>
                <div class="info-value">${char.race.languages ? char.race.languages.join(', ') : 'See race'}</div>
            </div>
        </div>
    `;
    document.getElementById('proficiencies-content').innerHTML = profHtml;

    // Update equipment
    const equipment = char.class.equipment || ["Starting equipment based on class"];
    const equipHtml = equipment.map(e => `<li>${e}</li>`).join('');
    document.getElementById('equipment-list').innerHTML = equipHtml;

    // Update background
    const bgHtml = `
        <div class="info-grid">
            <div class="info-item">
                <div class="info-label">Background</div>
                <div class="info-value">${char.background.name}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Feature</div>
                <div class="info-value">${char.background.feature}</div>
            </div>
        </div>
        <p style="margin-top: 1rem; font-style: italic;">${char.background.featureDescription || ''}</p>
    `;
    document.getElementById('background-content').innerHTML = bgHtml;

    // Show sheet
    document.getElementById('character-sheet').classList.add('active');
    document.getElementById('character-sheet').scrollIntoView({behavior: 'smooth'});
}

// ===== BATCH GENERATION =====
function generateBatch() {
    const count = parseInt(document.getElementById('batch-count').value);
    const container = document.getElementById('batch-results');
    container.innerHTML = '<h3 style="font-family: var(--font-display); color: var(--crimson); margin-bottom: 1.5rem; text-align: center; text-transform: uppercase; letter-spacing: 2px;">Generated Characters</h3>';
    
    for (let i = 0; i < count; i++) {
        const race = randomChoice(RACES_DATA);
        const cls = randomChoice(CLASSES_DATA);
        const subclass = randomChoice(cls.subclasses);
        const subclassName = typeof subclass === 'object' ? subclass.name : subclass;
        const background = randomChoice(BACKGROUNDS_DATA);
        const raceName = race.name.toLowerCase();
        const nameList = NAMES[raceName] || NAMES.default;
        const name = randomChoice(nameList);
        
        const card = document.createElement('div');
        card.className = 'info-item';
        card.innerHTML = `
            <strong style="color: var(--crimson); font-family: var(--font-display);">${i + 1}. ${name}</strong><br>
            ${race.name} (${race.subrace}) ${cls.name} (${subclassName})<br>
            Background: ${background.name}
        `;
        container.appendChild(card);
    }
}

// ===== EXPORT FUNCTIONS =====
function exportJSON() {
    if (!currentCharacter) {
        alert('Generate a character first!');
        return;
    }
    
    const json = JSON.stringify(currentCharacter, null, 2);
    const blob = new Blob([json], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentCharacter.name.replace(/\s+/g, '_')}_character.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function exportPDF() {
    if (!currentCharacter) {
        alert('Generate a character first!');
        return;
    }
    
    alert('Use the Print button to save as PDF via your browser!');
    window.print();
}

function shareCharacter() {
    if (!currentCharacter) {
        alert('Generate a character first!');
        return;
    }
    
    const encoded = btoa(JSON.stringify(currentCharacter));
    const shareUrl = `${window.location.origin}${window.location.pathname}#char=${encoded}`;
    
    navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Share link copied to clipboard!');
    }).catch(() => {
        prompt('Copy this link:', shareUrl);
    });
}

function saveToFavorites() {
    if (!currentCharacter) {
        alert('Generate a character first!');
        return;
    }
    
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(currentCharacter);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Character saved to favorites!');
}

// ===== INITIALIZATION =====
function init() {
    // Check for shared character
    const hash = window.location.hash;
    if (hash.startsWith('#char=')) {
        try {
            const encoded = hash.substring(6);
            currentCharacter = JSON.parse(atob(encoded));
            displayCharacterSheet();
        } catch (e) {
            console.error('Failed to load shared character:', e);
        }
    }
    
    console.log('✅ RandomLegend 5e initialized with full database!');
}

// Run initialization
document.addEventListener('DOMContentLoaded', init);

// ===== SERVICE WORKER FOR PWA =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('✅ Service Worker registered'))
            .catch(err => console.log('❌ SW registration failed:', err));
    });
}
