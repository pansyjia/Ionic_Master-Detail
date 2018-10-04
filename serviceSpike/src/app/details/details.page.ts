import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  private heroId: string;
  private hero: Hero;
  private heroName: string;
  private heroPowers: string[]; 
  

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private heroesService: HeroesService) { 
    this.route.params.subscribe((params) => {
      this.heroId = params['heroId'];
      this.hero = this.heroesService.getHeroById(parseInt(this.heroId));
      this.heroName = this.hero.getName();
    })

  }

  ngOnInit() {
  }

  private saveHero() {
    this.hero.setName(this.heroName);
    this.heroesService.saveData();
    this.router.navigate(['/home']);
  }

}
