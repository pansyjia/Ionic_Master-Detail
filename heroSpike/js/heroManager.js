"use strict";
exports.__esModule = true;
var hero_1 = require("./hero");
var nextHeroId = 100;
var HeroManager = /** @class */ (function () {
    function HeroManager() {
        this.heroes = {};
    }
    HeroManager.prototype.createHero = function (heroName, heroPowers) {
        if (heroPowers === void 0) { heroPowers = []; }
        var heroId = this.getNextHeroId();
        var hero = new hero_1.Hero(heroName, heroId, heroPowers);
        this.heroes[heroId] = hero;
    };
    HeroManager.prototype.getNextHeroId = function () {
        return nextHeroId++;
    };
    HeroManager.prototype.getHeroById = function (id) {
        return this.heroes[id];
    };
    HeroManager.prototype.getHeroByName = function (name) {
        var heroList = this.getHeroes();
        for (var i in heroList) {
            if (heroList[i].getName() === name) {
                return heroList[i];
            }
        }
        return undefined;
    };
    HeroManager.prototype.getHeroes = function () {
        var heroesList = [];
        for (var key in this.heroes) {
            heroesList.push(this.heroes[key]);
        }
        return heroesList;
    };
    HeroManager.prototype.removeHero = function (hero) {
        delete this.heroes[hero.getId()];
    };
    HeroManager.prototype.removeHeroById = function (id) {
        delete this.heroes[id];
    };
    return HeroManager;
}());
exports.HeroManager = HeroManager;
