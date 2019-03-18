import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, ActivationEnd} from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(222, this.heroService)
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        console.log(hero)
      });
  }

  goBack(): void {
    this.location.back();
  }

}
