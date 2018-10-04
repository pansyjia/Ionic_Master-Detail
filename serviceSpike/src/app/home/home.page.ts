import { Component } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../model/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private heroesList: Hero[];
  
  public constructor(private heroesService: HeroesService, private router: Router) {
    this.heroesService.getObservable().subscribe(() => {
      this.heroesList = this.heroesService.getHeroes();
      console.log("in HomePage constructor, heroesList updated " + this.heroesList);   
    })
  }
  
  public ngOnInit() {
    this.heroesList = this.heroesService.getHeroes();
    console.log("in HomePage ngOnInit, heroesList updated " + this.heroesList);   
  }

  private selectHero(hero: Hero): void {
    this.router.navigate(['/details', hero.getId()]);
  }
}
