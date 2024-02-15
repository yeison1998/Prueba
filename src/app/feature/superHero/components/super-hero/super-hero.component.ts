import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SuperHeroService } from '../../services/super-hero.service';
import { SuperHero } from '../../models/super-hero';

@Component({
  selector: 'app-super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit {

  listHeros: SuperHero[] = [];
  p: number = 1;
  constructor(private spinner: NgxSpinnerService, private _superHeroService: SuperHeroService) {

  }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros(): void {
    this._superHeroService.getHeros().subscribe({
      next: (res) => {
        this.listHeros = res;
      }, error: () => {

      }
    });
  }

  test() {
    this.spinner.show();
  }
}
