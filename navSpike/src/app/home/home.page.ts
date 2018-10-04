import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private inputName: string; 

  public constructor(private router: Router) {
    
  }

  private goToPage2() {
    this.router.navigate( ['/pageTwo', this.inputName] );
  }
}
