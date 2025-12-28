// =====================================================
// RANDOMLEGEND 5E - D&D BEYOND STYLE
// Character Builder & Official Sheet System
// =====================================================

// ===== GLOBAL STATE =====
const characterBuilder = {
    currentStep: 1,
    race: null,
    class: null,
    subclass: null,
    abilityScores: {str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10},
    background: null,
    name: '',
    alignment: 'True Neutral',
    personality: '',
    level: 1
};

// Load full datasets
const RACES_DATA = races;
const CLASSES_DATA = classes;
const BACKGROUNDS_DATA = backgrounds;

console.log(`✅ Loaded ${RACES_DATA.length} races, ${CLASSES_DATA.length} classes, ${BACKGROUNDS_DATA.length} backgrounds`);

// ===== VIEW SWITCHING =====
function switchView(view) {
    // Hide all views
    document.getElementById('builder-view').style.display = 'none';
    document.getElementById('sheet-view').style.display = 'none';
    document.getElementById('quick-view').style.display = 'none';
    
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    
    // Show selected view
    if (view === 'builder') {
        document.getElementById('builder-view').style.display = 'grid';
        document.querySelectorAll('.nav-tab')[0].classList.add('active');
    } else if (view === 'sheet') {
        document.getElementById('sheet-view').style.display = 'block';
        document.querySelectorAll('.nav-tab')[1].classList.add('active');
        populateOfficialSheet();
    } else if (view === 'quick') {
        document.getElementById('quick-view').style.display = 'block';
        document.querySelectorAll('.nav-tab')[2].classList.add('active');
    }
}

// ===== STEP NAVIGATION =====
function goToStep(step) {
    characterBuilder.currentStep = step;
    
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show current section
    document.getElementById(`step-${step}`).classList.add('active');
    
    // Update step indicators
    document.querySelectorAll('.builder-step').forEach((stepEl, index) => {
        stepEl.classList.remove('active');
        if (index + 1 === step) {
            stepEl.classList.add('active');
        }
        if (index + 1 < step) {
            stepEl.classList.add('complete');
        } else {
            stepEl.classList.remove('complete');
        }
    });
    
    // Populate step content if needed
    if (step === 1 && document.getElementById('race-grid').children.length === 0) {
        populateRaces();
    } else if (step === 2 && document.getElementById('class-grid').children.length === 0) {
        populateClasses();
    } else if (step === 4 && document.getElementById('background-grid').children.length === 0) {
        populateBackgrounds();
    } else if (step === 6) {
        populateReview();
    }
}

function nextStep() {
    if (characterBuilder.currentStep < 6) {
        goToStep(characterBuilder.currentStep + 1);
    }
}

function prevStep() {
    if (characterBuilder.currentStep > 1) {
        goToStep(characterBuilder.currentStep - 1);
    }
}

// ===== POPULATE RACES =====
function populateRaces() {
    const grid = document.getElementById('race-grid');
    grid.innerHTML = '';
    
    RACES_DATA.forEach(race => {
        const card = document.createElement('div');
        card.className = 'choice-card';
        card.onclick = () => selectRace(race, card);
        
        const asiText = typeof race.asi === 'object' 
            ? Object.entries(race.asi).map(([stat, val]) => `${stat.toUpperCase()} +${val}`).join(', ')
            : race.asi;
        
        card.innerHTML = `
            <div class="choice-title">${race.name}</div>
            <div class="choice-subtitle">${race.subrace} • ${race.source}</div>
            <div class="choice-details">
                <strong>Speed:</strong> ${race.speed}ft<br>
                <strong>ASI:</strong> ${asiText}<br>
                <strong>Traits:</strong> ${race.traits.slice(0, 2).join(', ')}${race.traits.length > 2 ? '...' : ''}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function selectRace(race, cardElement) {
    // Deselect all
    document.querySelectorAll('#race-grid .choice-card').forEach(c => c.classList.remove('selected'));
    
    // Select this one
    cardElement.classList.add('selected');
    characterBuilder.race = race;
    
    updatePreview();
}

function filterRaces() {
    const search = document.getElementById('race-search').value.toLowerCase();
    document.querySelectorAll('#race-grid .choice-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(search) ? 'block' : 'none';
    });
}

// ===== POPULATE CLASSES =====
function populateClasses() {
    const grid = document.getElementById('class-grid');
    grid.innerHTML = '';
    
    CLASSES_DATA.forEach(cls => {
        const card = document.createElement('div');
        card.className = 'choice-card';
        card.onclick = () => selectClass(cls, card);
        
        card.innerHTML = `
            <div class="choice-title">${cls.name}</div>
            <div class="choice-subtitle">Hit Die: ${cls.hitDie}</div>
            <div class="choice-details">
                <strong>Primary:</strong> ${cls.primaryAbility.join(', ')}<br>
                <strong>Saves:</strong> ${cls.saves.join(', ')}<br>
                <strong>Subclasses:</strong> ${cls.subclasses.length}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function selectClass(cls, cardElement) {
    // Deselect all
    document.querySelectorAll('#class-grid .choice-card').forEach(c => c.classList.remove('selected'));
    
    // Select this one
    cardElement.classList.add('selected');
    characterBuilder.class = cls;
    
    // Show subclass selection
    populateSubclasses(cls);
    document.getElementById('subclass-section').style.display = 'block';
    
    updatePreview();
}

function populateSubclasses(cls) {
    const grid = document.getElementById('subclass-grid');
    grid.innerHTML = '';
    
    cls.subclasses.forEach(subclass => {
        const subName = typeof subclass === 'object' ? subclass.name : subclass;
        const subSource = typeof subclass === 'object' ? subclass.source : 'PHB';
        
        const card = document.createElement('div');
        card.className = 'choice-card';
        card.onclick = () => selectSubclass(subName, card);
        
        card.innerHTML = `
            <div class="choice-title">${subName}</div>
            <div class="choice-subtitle">${subSource}</div>
        `;
        
        grid.appendChild(card);
    });
}

function selectSubclass(subclassName, cardElement) {
    document.querySelectorAll('#subclass-grid .choice-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');
    characterBuilder.subclass = subclassName;
    updatePreview();
}

// ===== ABILITY SCORES =====
function rollAbilityScores() {
    showDiceRoller();
    
    setTimeout(() => {
        const scores = {
            str: roll4d6DropLowest(),
            dex: roll4d6DropLowest(),
            con: roll4d6DropLowest(),
            int: roll4d6DropLowest(),
            wis: roll4d6DropLowest(),
            cha: roll4d6DropLowest()
        };
        
        characterBuilder.abilityScores = scores;
        hideDiceRoller();
        displayAbilityScores(scores);
        updatePreview();
    }, 1500);
}

function roll4d6DropLowest() {
    const rolls = [rollDice(6), rollDice(6), rollDice(6), rollDice(6)];
    rolls.sort((a, b) => a - b);
    rolls.shift();
    return rolls.reduce((a, b) => a + b, 0);
}

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function displayAbilityScores(scores) {
    const container = document.getElementById('ability-scores-display');
    container.innerHTML = '';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    container.style.gap = '1.5rem';
    
    Object.entries(scores).forEach(([ability, score]) => {
        const modifier = getModifier(score);
        const div = document.createElement('div');
        div.className = 'preview-stat';
        div.style.background = 'var(--beyond-bg)';
        div.style.padding = '2rem';
        div.style.borderRadius = '8px';
        div.style.textAlign = 'center';
        div.innerHTML = `
            <div style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">${ability}</div>
            <div style="font-size: 3rem; font-weight: 900; color: var(--dnd-red);">${score}</div>
            <div style="font-size: 1.3rem; font-weight: 600; color: var(--beyond-text);">${modifier >= 0 ? '+' : ''}${modifier}</div>
        `;
        container.appendChild(div);
    });
}

function getModifier(score) {
    return Math.floor((score - 10) / 2);
}

// ===== DICE ROLLER ANIMATION =====
function showDiceRoller() {
    const overlay = document.getElementById('dice-roller-overlay');
    const face = document.getElementById('dice-face');
    const text = document.getElementById('dice-result-text');
    
    overlay.classList.add('active');
    text.textContent = 'Rolling...';
    
    // Animate dice roll
    let counter = 0;
    const interval = setInterval(() => {
        face.textContent = rollDice(20);
        counter++;
        if (counter > 10) {
            clearInterval(interval);
        }
    }, 100);
}

function hideDiceRoller() {
    setTimeout(() => {
        document.getElementById('dice-roller-overlay').classList.remove('active');
    }, 500);
}

// ===== POPULATE BACKGROUNDS =====
function populateBackgrounds() {
    const grid = document.getElementById('background-grid');
    grid.innerHTML = '';
    
    BACKGROUNDS_DATA.forEach(bg => {
        const card = document.createElement('div');
        card.className = 'choice-card';
        card.onclick = () => selectBackground(bg, card);
        
        card.innerHTML = `
            <div class="choice-title">${bg.name}</div>
            <div class="choice-subtitle">${bg.source}</div>
            <div class="choice-details">
                <strong>Skills:</strong> ${bg.skillProficiencies.join(', ')}<br>
                <strong>Feature:</strong> ${bg.feature}
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function selectBackground(bg, cardElement) {
    document.querySelectorAll('#background-grid .choice-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');
    characterBuilder.background = bg;
    updatePreview();
}

function filterBackgrounds() {
    const search = document.getElementById('background-search').value.toLowerCase();
    document.querySelectorAll('#background-grid .choice-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(search) ? 'block' : 'none';
    });
}

// ===== CHARACTER PREVIEW =====
function updatePreview() {
    // Update name
    const name = characterBuilder.name || 'New Character';
    document.getElementById('preview-name').textContent = name;
    
    // Update subtitle
    let subtitle = [];
    if (characterBuilder.race) subtitle.push(`${characterBuilder.race.name} (${characterBuilder.race.subrace})`);
    if (characterBuilder.class) subtitle.push(characterBuilder.class.name);
    if (characterBuilder.subclass) subtitle.push(`(${characterBuilder.subclass})`);
    document.getElementById('preview-subtitle').textContent = subtitle.join(' ') || 'Select options to build';
    
    // Update stats
    const finalStats = {...characterBuilder.abilityScores};
    
    // Apply racial ASI
    if (characterBuilder.race && typeof characterBuilder.race.asi === 'object') {
        Object.entries(characterBuilder.race.asi).forEach(([stat, bonus]) => {
            finalStats[stat] = (finalStats[stat] || 10) + bonus;
        });
    }
    
    Object.entries(finalStats).forEach(([stat, value]) => {
        const el = document.getElementById(`preview-${stat}`);
        if (el) el.textContent = value;
    });
    
    // Update traits preview
    const traitsEl = document.getElementById('preview-traits');
    traitsEl.innerHTML = '';
    
    if (characterBuilder.race) {
        const div = document.createElement('div');
        div.style.marginBottom = '1rem';
        div.innerHTML = `<strong style="color: var(--dnd-red);">Racial Traits:</strong><br>${characterBuilder.race.traits.slice(0, 3).join(', ')}`;
        traitsEl.appendChild(div);
    }
    
    if (characterBuilder.background) {
        const div = document.createElement('div');
        div.innerHTML = `<strong style="color: var(--dnd-red);">Background:</strong><br>${characterBuilder.background.feature}`;
        traitsEl.appendChild(div);
    }
}

// ===== CONTINUE IN NEXT CHUNK =====

// ===== NAME & PERSONALITY GENERATION =====
const NAMES = {
    human: ['Alric', 'Brenna', 'Cedric', 'Diana', 'Erik', 'Fiona', 'Garrett', 'Helena'],
    dwarf: ['Thorin', 'Dain', 'Gimli', 'Balin', 'Dwalin', 'Nori', 'Dori', 'Gloin'],
    elf: ['Legolas', 'Arwen', 'Elrond', 'Galadriel', 'Thranduil', 'Tauriel', 'Celeborn'],
    halfling: ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin', 'Rosie', 'Lobelia'],
    dragonborn: ['Arjhan', 'Balasar', 'Bharash', 'Donaar', 'Ghesh', 'Heskan', 'Kriv'],
    gnome: ['Alston', 'Alvyn', 'Boddynock', 'Brocc', 'Burgell', 'Dimble', 'Erky'],
    tiefling: ['Akmenios', 'Amnon', 'Barakas', 'Damakos', 'Ekemon', 'Iados', 'Kairon'],
    default: ['Aric', 'Bran', 'Cal', 'Dex', 'Echo', 'Finn', 'Gage', 'Haven', 'Iris', 'Jax']
};

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
    "Once someone questions my courage, I never back down.",
];

function randomizeName() {
    if (!characterBuilder.race) {
        alert('Please select a race first!');
        return;
    }
    
    const raceName = characterBuilder.race.name.toLowerCase();
    const nameList = NAMES[raceName] || NAMES.default;
    const name = nameList[Math.floor(Math.random() * nameList.length)];
    
    document.getElementById('char-name-input').value = name;
    characterBuilder.name = name;
    updatePreview();
}

function randomizePersonality() {
    const trait = PERSONALITY_TRAITS[Math.floor(Math.random() * PERSONALITY_TRAITS.length)];
    document.getElementById('personality-input').value = trait;
    characterBuilder.personality = trait;
}

// ===== REVIEW PAGE =====
function populateReview() {
    const container = document.getElementById('character-review');
    
    const finalStats = {...characterBuilder.abilityScores};
    if (characterBuilder.race && typeof characterBuilder.race.asi === 'object') {
        Object.entries(characterBuilder.race.asi).forEach(([stat, bonus]) => {
            finalStats[stat] = (finalStats[stat] || 10) + bonus;
        });
    }
    
    container.innerHTML = `
        <div style="background: var(--beyond-card); padding: 2rem; border-radius: 8px; border: 1px solid var(--beyond-border);">
            <h3 style="color: var(--dnd-red); font-family: var(--font-heading); font-size: 2rem; margin-bottom: 1.5rem;">
                ${characterBuilder.name || 'Unnamed Character'}
            </h3>
            
            <p style="font-size: 1.3rem; margin-bottom: 2rem;">
                Level 1 ${characterBuilder.race ? `${characterBuilder.race.name} (${characterBuilder.race.subrace})` : ''} 
                ${characterBuilder.class ? characterBuilder.class.name : ''} 
                ${characterBuilder.subclass ? `(${characterBuilder.subclass})` : ''}
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem;">
                ${Object.entries(finalStats).map(([stat, value]) => `
                    <div style="background: var(--beyond-bg); padding: 1.5rem; border-radius: 6px; text-align: center;">
                        <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">${stat}</div>
                        <div style="font-size: 2rem; font-weight: 900; color: var(--dnd-red);">${value}</div>
                        <div style="font-size: 1.1rem;">${getModifier(value) >= 0 ? '+' : ''}${getModifier(value)}</div>
                    </div>
                `).join('')}
            </div>
            
            ${characterBuilder.race ? `
                <div style="margin-bottom: 1.5rem;">
                    <strong style="color: var(--dnd-red);">Racial Traits:</strong><br>
                    ${characterBuilder.race.traits.join(', ')}
                </div>
            ` : ''}
            
            ${characterBuilder.background ? `
                <div style="margin-bottom: 1.5rem;">
                    <strong style="color: var(--dnd-red);">Background:</strong> ${characterBuilder.background.name}<br>
                    <strong style="color: var(--dnd-red);">Skills:</strong> ${characterBuilder.background.skillProficiencies.join(', ')}<br>
                    <strong style="color: var(--dnd-red);">Feature:</strong> ${characterBuilder.background.feature}
                </div>
            ` : ''}
            
            ${characterBuilder.personality ? `
                <div style="margin-bottom: 1.5rem;">
                    <strong style="color: var(--dnd-red);">Personality:</strong><br>
                    "${characterBuilder.personality}"
                </div>
            ` : ''}
        </div>
    `;
}

// ===== FINALIZE CHARACTER =====
function finalizeCharacter() {
    // Collect name and alignment from inputs
    characterBuilder.name = document.getElementById('char-name-input').value || 'Unnamed Character';
    characterBuilder.alignment = document.getElementById('alignment-select').value;
    characterBuilder.personality = document.getElementById('personality-input').value;
    
    // Calculate final stats
    const finalStats = {...characterBuilder.abilityScores};
    if (characterBuilder.race && typeof characterBuilder.race.asi === 'object') {
        Object.entries(characterBuilder.race.asi).forEach(([stat, bonus]) => {
            finalStats[stat] = (finalStats[stat] || 10) + bonus;
        });
    }
    characterBuilder.finalStats = finalStats;
    
    // Calculate HP
    const hitDieValue = characterBuilder.class ? parseInt(characterBuilder.class.hitDie.substring(1)) : 10;
    characterBuilder.hp = hitDieValue + getModifier(finalStats.con);
    
    // Switch to sheet view
    switchView('sheet');
}

// ===== POPULATE OFFICIAL SHEET =====
function populateOfficialSheet() {
    if (!characterBuilder.race || !characterBuilder.class) {
        alert('Please complete character creation first!');
        switchView('builder');
        return;
    }
    
    const finalStats = characterBuilder.finalStats || characterBuilder.abilityScores;
    
    // Fill in header fields
    document.getElementById('sheet-char-name').value = characterBuilder.name || '';
    document.getElementById('sheet-class-level').value = `${characterBuilder.class.name} ${characterBuilder.level}`;
    document.getElementById('sheet-background').value = characterBuilder.background ? characterBuilder.background.name : '';
    document.getElementById('sheet-race').value = `${characterBuilder.race.name} (${characterBuilder.race.subrace})`;
    document.getElementById('sheet-alignment').value = characterBuilder.alignment || '';
    document.getElementById('sheet-xp').value = '0';
    
    // Fill in ability scores
    document.querySelectorAll('.ability-box').forEach(box => {
        const ability = box.dataset.ability;
        const score = finalStats[ability] || 10;
        const modifier = getModifier(score);
        
        box.querySelector('.ability-score').textContent = score;
        box.querySelector('.ability-modifier').textContent = (modifier >= 0 ? '+' : '') + modifier;
    });
    
    // Enable contenteditable for editing
    document.querySelectorAll('.ability-score[contenteditable="true"]').forEach(el => {
        el.addEventListener('input', function() {
            const box = this.closest('.ability-box');
            const ability = box.dataset.ability;
            const newScore = parseInt(this.textContent) || 10;
            const newMod = getModifier(newScore);
            box.querySelector('.ability-modifier').textContent = (newMod >= 0 ? '+' : '') + newMod;
            characterBuilder.finalStats[ability] = newScore;
        });
    });
}

// ===== PDF EXPORT =====
async function exportToPDF() {
    alert('PDF export will fill the official D&D character sheet with your data and download it. Coming in next update!');
    // This will use pdf-lib to fill the actual form fields in the official PDF
}

// ===== EDIT SHEET =====
function editSheet() {
    const sheet = document.getElementById('official-sheet');
    const isEditing = sheet.classList.toggle('editing');
    
    if (isEditing) {
        // Enable editing on all inputs
        sheet.querySelectorAll('input, textarea, [contenteditable]').forEach(el => {
            el.style.background = 'rgba(197, 49, 49, 0.05)';
        });
        alert('Edit mode enabled! Click any field to edit.');
    } else {
        sheet.querySelectorAll('input, textarea, [contenteditable]').forEach(el => {
            el.style.background = '';
        });
    }
}

// ===== QUICK GENERATE =====
function quickGenerate() {
    // Randomize everything
    characterBuilder.race = RACES_DATA[Math.floor(Math.random() * RACES_DATA.length)];
    characterBuilder.class = CLASSES_DATA[Math.floor(Math.random() * CLASSES_DATA.length)];
    characterBuilder.subclass = characterBuilder.class.subclasses[Math.floor(Math.random() * characterBuilder.class.subclasses.length)];
    if (typeof characterBuilder.subclass === 'object') {
        characterBuilder.subclass = characterBuilder.subclass.name;
    }
    characterBuilder.background = BACKGROUNDS_DATA[Math.floor(Math.random() * BACKGROUNDS_DATA.length)];
    
    // Roll stats
    characterBuilder.abilityScores = {
        str: roll4d6DropLowest(),
        dex: roll4d6DropLowest(),
        con: roll4d6DropLowest(),
        int: roll4d6DropLowest(),
        wis: roll4d6DropLowest(),
        cha: roll4d6DropLowest()
    };
    
    // Generate name
    const raceName = characterBuilder.race.name.toLowerCase();
    const nameList = NAMES[raceName] || NAMES.default;
    characterBuilder.name = nameList[Math.floor(Math.random() * nameList.length)];
    
    // Random alignment
    const alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
    characterBuilder.alignment = alignments[Math.floor(Math.random() * alignments.length)];
    
    // Random personality
    characterBuilder.personality = PERSONALITY_TRAITS[Math.floor(Math.random() * PERSONALITY_TRAITS.length)];
    
    // Calculate final stats
    const finalStats = {...characterBuilder.abilityScores};
    if (typeof characterBuilder.race.asi === 'object') {
        Object.entries(characterBuilder.race.asi).forEach(([stat, bonus]) => {
            finalStats[stat] = (finalStats[stat] || 10) + bonus;
        });
    }
    characterBuilder.finalStats = finalStats;
    
    // Calculate HP
    const hitDieValue = parseInt(characterBuilder.class.hitDie.substring(1));
    characterBuilder.hp = hitDieValue + getModifier(finalStats.con);
    
    // Display result
    const result = document.getElementById('quick-result');
    result.innerHTML = `
        <div style="background: var(--beyond-card); padding: 3rem; border-radius: 8px; border: 1px solid var(--beyond-border); max-width: 800px; margin: 0 auto;">
            <h2 style="font-family: var(--font-heading); font-size: 2.5rem; color: var(--dnd-red); margin-bottom: 1rem;">
                ${characterBuilder.name}
            </h2>
            <p style="font-size: 1.5rem; color: var(--beyond-text); margin-bottom: 2rem;">
                Level 1 ${characterBuilder.race.name} (${characterBuilder.race.subrace}) ${characterBuilder.class.name} (${characterBuilder.subclass})
            </p>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                ${Object.entries(finalStats).map(([stat, value]) => `
                    <div style="background: var(--beyond-bg); padding: 2rem; border-radius: 8px; text-align: center;">
                        <div style="font-size: 0.9rem; color: var(--text-muted); text-transform: uppercase;">${stat}</div>
                        <div style="font-size: 2.5rem; font-weight: 900; color: var(--dnd-red);">${value}</div>
                        <div style="font-size: 1.2rem;">${getModifier(value) >= 0 ? '+' : ''}${getModifier(value)}</div>
                    </div>
                `).join('')}
            </div>
            
            <div style="text-align: center; margin-top: 3rem;">
                <button class="btn btn-primary btn-lg" onclick="switchView('sheet')">View Character Sheet</button>
                <button class="btn btn-secondary" style="margin-left: 1rem;" onclick="quickGenerate()">🎲 Generate Another</button>
            </div>
        </div>
    `;
}

// ===== RANDOMIZE ALL =====
function randomizeAll() {
    if (confirm('This will randomize your entire character. Continue?')) {
        quickGenerate();
        alert('Character randomized! Review in the Quick Generate tab or switch to Character Sheet.');
    }
}

// ===== INITIALIZATION =====
function init() {
    console.log('✅ D&D Beyond-style Character Builder initialized!');
    populateRaces();
}

document.addEventListener('DOMContentLoaded', init);

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('✅ Service Worker registered'))
            .catch(err => console.log('❌ SW registration failed:', err));
    });
}
