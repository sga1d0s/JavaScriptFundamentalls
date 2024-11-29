import { Mage } from './Mage.js';
import { Spell } from './Spell.js';
import { showAttr } from './combat.js';

// crear hechizos
const lightning = new Spell("Lightning", 24, 12);
const fireball = new Spell("Fireball", 35, 15);

// crear mago1
const mage1 = new Mage("Eldritch", 5, 200, 150, 12);
mage1.spell = lightning;

// crear mago2
const mage2 = new Mage("Asseth", 3, 300, 170, 12);
mage2.spell = fireball;

// mostrar atributos
showAttr(mage1);
showAttr(mage2);

// combate: mage1 ataca a mage2
mage1.combat(mage2);

// mostrar atributos prmer ataque
showAttr(mage1);
showAttr(mage2);

// combate: mage2 ataca a mage1
mage2.combat(mage1);

// mostrar atributos segundo ataque
showAttr(mage1);
showAttr(mage2);