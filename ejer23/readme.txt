// Simulación de combate entre 2 magos con hechizos

// Vamos a crear los siguientes ficheros:

// Mage.js
// -----------------------------------------------------------------
// Crear la clase Mage que servirá como plantilla para crear magos
// Contendrá los siguientes atributos: name (string), level, life, mana, strength(todos números enteros), spell (objeto de la clase Spell)
// Al constructor le pasaremos todos los argumentos diponibles: name, level, life, mana, strength
// Exportamos la clase

// Spell.js
//-------------------------------------------
// Crear la clase Spell que servirá como plantilla para crear hechizos
// Atributos: name, damage, points (puntos que gasta el hechizo)
// Al constructor le pasaremos todos los argumentos diponibles: name, damage, points
// Exportamos la clase


// combat.js
//---------------------------------------------
// Tendrá dos métodos:

// combat(attacker, defender) siendo attacker y defender objetos de la clase Mage.
// ----------------------------------
// Calculará el daño ejercido: Damage = level * strength + spellDamage 
// Eliminará el daño del atributo life del target.
// Reducirá el maná del atacante en los puntos del hechizo utilizado.

// showAttr(mage)
// --------------------------------------
// sacará los atributos del mago pasado como argumento

// Exportamos los 2 métodos


//game.js
//----------------------------------------------
// Tendrá la estructura de juego

// Importará las clases Mage, Spell y las funciones combat y showAttr()
// Creará 2 hechizos y 2 magos (cada mago tendrá 1 hechizo):

//Mago1: 
//name: Eldritch, level: 5, life: 200, mana: 150, strength: 12
//spell: Lightning, damage: 24, points: 12

//Mago1: 
//name: Asseth, level: 3, life: 300, mana: 170, strength: 12
//spell: Fireball, damage: 35, points: 15

//A continuación llamaremos a showAttr para cada mago
//A continuación llamará a la función combat pasando los dos magos como argumentos
//A continuación llamaremos a showAttr para cada mago
//A continuación llamará a la función combat pasando los dos magos como argumentos, en orden inverso a antes
//A continuación llamaremos a showAttr para cada mago

//ejercicio23.html
//---------------------------------------------------------
//importar game.js como módulo (type = "module")  
//Ejecutaremos ejercicio23.html a través de LiveServer o XAMPP (a través del navegador con localhost)