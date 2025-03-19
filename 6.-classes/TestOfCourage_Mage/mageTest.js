import Mage from "./Mage.js";

function main() {
    console.log("--- Combate entre 2 magos ---");
    let mage1 = new Mage("Gandalf", 10, 40, 100, 50);
    let mage2 = new Mage("Saruman", 12, 35, 120, 60);

    console.log(mage1.getStatus());
    console.log(mage2.getStatus());

    mage1.heal(20);
    console.log(`Después de curarse: ${mage1.getStatus()}`);

    mage1.attack(mage2);
    console.log(mage2.getStatus());

    let spellResult = mage1.castSpell(mage2);
    if (spellResult === -1) {
        console.log(`${mage1._name} no tiene suficiente maná para lanzar un hechizo.`);
    }
    console.log(mage2.getStatus());

    console.log(`¿${mage2._name} sigue vivo? ${mage2.isAlive()}`);

    console.log("\n--- Combate de 1 mago contra 9 magos ---");
    let mainMage = new Mage("Merlín", 20, 50, 150, 100);
    let enemies = [];

    for (let i = 1; i <= 9; i++) {
        let level = Math.floor(Math.random() * 20) + 1;
        enemies.push(new Mage(`Richard von ${i}`, level, 20, level * 10, level * 5));
    }

    console.log(mainMage.getStatus());
    enemies.forEach(enemy => console.log(enemy.getStatus()));

    enemies.forEach(enemy => {
        if (mainMage.isAlive()) {
            mainMage.attack(enemy);
            console.log(enemy.getStatus());
        }
    });
}

main();