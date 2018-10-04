"use strict";
exports.__esModule = true;
var Hero = /** @class */ (function () {
    // private heroName: string;
    // private heroId: number;
    // private heroPowers: string[];
    function Hero(heroName, heroId, heroPowers) {
        if (heroPowers === void 0) { heroPowers = []; }
        this.heroName = heroName;
        this.heroId = heroId;
        this.heroPowers = heroPowers;
    }
    Hero.prototype.setName = function (newName) {
        this.heroName = newName;
    };
    Hero.prototype.getName = function () {
        return this.heroName;
    };
    Hero.prototype.getId = function () {
        return this.heroId;
    };
    Hero.prototype.getPowers = function () {
        return this.heroPowers;
    };
    Hero.prototype.setPowers = function (newPowers) {
        this.heroPowers = newPowers;
    };
    Hero.prototype.addPower = function (newPower) {
        this.heroPowers.push(newPower);
    };
    Hero.prototype.removePower = function (powerToRemove) {
        if (this.heroPowers.indexOf(powerToRemove) != -1) {
            this.heroPowers.splice(this.heroPowers.indexOf(powerToRemove), 1);
        }
    };
    Hero.prototype.toString = function () {
        return this.heroName + "(" + this.heroId + ") " + this.heroPowers;
    };
    return Hero;
}());
exports.Hero = Hero;
