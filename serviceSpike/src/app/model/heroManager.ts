import { Hero } from './hero';

var nextHeroId: number = 100;

export class HeroManager {

    private heroes: Object = {}; 

    public constructor() {

    }

    public initFromBundle(heroBundle: Object /*Hero[]*/) {
        console.log(heroBundle);
        for (let i in heroBundle) {
            let name:string = heroBundle[i]['heroName'];
            let id: number = parseInt(heroBundle[i]['heroId']);
            let powers:string[] = heroBundle[i]['heroPowers'];
            this.createHeroWithId(name, id, powers);
        }
        console.log(this.getHeroes());
    }

    private createHeroWithId(heroName: string, heroId: number, heroPowers: string[] = []): Hero {
        let hero = new Hero(heroName, heroId, heroPowers);
        this.heroes[heroId] = hero;
        return hero;
    }

    public createHero(heroName: string, heroPowers: string[] = []): Hero {
        let heroId = this.getNextHeroId();
        return this.createHeroWithId(heroName, heroId, heroPowers);
    }

    private getNextHeroId(): number {
        return nextHeroId++;
    }

    public getHeroById(id: number): Hero {
        return this.heroes[id];
    }

    public getHeroByName(name: string): Hero {
        let heroList = this.getHeroes();
        for (let i in heroList) {
            if (heroList[i].getName() === name) {
                return heroList[i];
            }
        }
        return undefined;
    }

    public getHeroes(): Hero[] {
        let heroesList: Hero[] = [];
        for (let key in this.heroes) {
            heroesList.push(this.heroes[key]);
        }
        return heroesList;
    }

    public removeHero(hero: Hero) {
        delete this.heroes[hero.getId()];
    }

    public removeHeroById(id: number) {
        delete this.heroes[id];
    }
}