"use strict";
exports.__esModule = true;
var heroManager_1 = require("./heroManager");
var heroManager = new heroManager_1.HeroManager();
function printHeroes() {
    var heroes = heroManager.getHeroes();
    console.log("\n**** Here are the heroes! ****\n");
    for (var i in heroes) {
        console.log("" + heroes[i]);
    }
    console.log("\n*************\n");
}
heroManager.createHero("Batman", ["Martial Arts", "Technology"]);
heroManager.createHero("Superman", ["Flight", "Super Speed", "X-Ray Vision"]);
heroManager.createHero("Spiderman", ["Web Slinging", "Climbing"]);
printHeroes();
var h1 = heroManager.getHeroByName("Superman");
console.log("Found Superman! " + h1);
var h2 = heroManager.getHeroByName("Clark Kent");
console.log("Clark kent? " + h2);
var id = h1.getId();
var h3 = heroManager.getHeroById(id);
console.log("Found " + id + ": " + h3);
var h4 = heroManager.getHeroByName("Spiderman");
h4.addPower("Super Strength");
h4.removePower("Climbing");
console.log("Spidey's powers: " + h4.getPowers());
heroManager.removeHero(heroManager.getHeroByName("Batman"));
printHeroes();
heroManager.createHero("Iron Man", ["Technology", "Intelligence", "Quips"]);
printHeroes();
heroManager.getHeroByName("Iron Man").setName("Iron Man (Tony Stark)");
printHeroes();
