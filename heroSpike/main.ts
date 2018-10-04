import { HeroManager } from "./heroManager";
import { Hero } from "./hero";

let heroManager = new HeroManager();

function printHeroes() {
    let heroes: Hero[] = heroManager.getHeroes();

    console.log("\n**** Here are the heroes! ****\n")
    for (let i in heroes) {
        console.log("" + heroes[i]);
    }
    console.log("\n*************\n")

}

heroManager.createHero("Batman", ["Martial Arts", "Technology"]);
heroManager.createHero("Superman", ["Flight", "Super Speed", "X-Ray Vision"]);
heroManager.createHero("Spiderman", ["Web Slinging", "Climbing"]);

printHeroes();

let h1 = heroManager.getHeroByName("Superman");
console.log("Found Superman! " + h1);

let h2 = heroManager.getHeroByName("Clark Kent");
console.log("Clark kent? " + h2);

let id = h1.getId();
let h3 = heroManager.getHeroById(id);
console.log("Found " + id + ": " + h3);

let h4 = heroManager.getHeroByName("Spiderman");
h4.addPower("Super Strength");
h4.removePower("Climbing");
console.log("Spidey's powers: " + h4.getPowers());

heroManager.removeHero(heroManager.getHeroByName("Batman"));
printHeroes();

heroManager.createHero("Iron Man", ["Technology", "Intelligence", "Quips"]);
printHeroes();

heroManager.getHeroByName("Iron Man").setName("Iron Man (Tony Stark)");
printHeroes();


