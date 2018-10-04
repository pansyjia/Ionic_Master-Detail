import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HeroManager } from './model/heroManager';
import { Hero } from './model/hero';
import { Observable } from 'rxjs/internal/Observable';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroManager: HeroManager;
  private testing: boolean = true;
  private DATA_KEY: string = 'data';
  private heroBundle: Object;
  private theObservable: Observable<Object>;
  private theObserver: Observer<Object>;

  constructor(private storage: Storage) { 
    this.heroManager = new HeroManager();
    
    this.storage.get(this.DATA_KEY).then(data => {
      this.heroBundle = data;
      console.log("Retrieved heroBundle: " + this.heroBundle);
      if(this.heroBundle === undefined) {
        this.loadDefaultHeroes();
      } else {
        this.heroManager.initFromBundle(this.heroBundle);
      }
      this.updateObservers();
    });

  }

  private loadDefaultHeroes() : void {
    this.heroManager.createHero("Batman", ["Martial Arts", "Technology"]);
    this.heroManager.createHero("Superman", ["Flight", "Super Speed", "X-Ray Vision"]);
    this.heroManager.createHero("Spiderman", ["Web Slinging", "Climbing"]);
  }

  public getHeroes(): Hero[] {
    return this.heroManager.getHeroes();
  }
  public getHeroById(id: number): Hero {
    return this.heroManager.getHeroById(id);
  }

  public saveData(): void {
    this.heroBundle = this.heroManager.getHeroes();
    this.storage.set(this.DATA_KEY, this.heroBundle);
    //this.updateObservers
    console.log("Saved heroBundle: " + this.heroBundle);
  }

  public getObservable(): Observable<Object> {
    if (this.theObservable === undefined) {
      this.theObservable = Observable.create(observer =>
        this.theObserver = observer);
    }
    return this.theObservable;
    
  }

  private updateObservers() {
    if (this.theObserver) {
      this.theObserver.next(true);
    }
  }
}
