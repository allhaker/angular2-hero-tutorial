import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]

})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    public heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService
        ) { }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}
