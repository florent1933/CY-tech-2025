import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BehaviorSubject, combineLatest, map, Observable, share } from 'rxjs';

type Planet = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

type ResponsePlanets = {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
};

@Component({
  selector: 'app-sw-container',
  imports: [CommonModule, HttpClientModule, FlexLayoutModule],
  templateUrl: './sw-container.component.html',
  styleUrl: './sw-container.component.scss',
})
export class SwContainerComponent {
  data$: Observable<ResponsePlanets>;

  planets$: Observable<Planet[]>;
  filteredPlanets$: Observable<Planet[]>;

  terrains$: Observable<string[]>;

  selectedTerrain = new BehaviorSubject<string>('All');

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.data$ = this.httpClient
      .get<ResponsePlanets>('https://swapi.py4e.com/api/planets')
      .pipe(share());

    this.planets$ = this.data$.pipe(map((response) => response.results));

    this.terrains$ = this.planets$.pipe(
      map((planets) => {
        return planets.map((planet) => planet.terrain);
      }),
      map((terrains) => {
        return terrains.map((terrain) => terrain.split(', ')).flat();
      }),
      // remove the extra "s" at the end
      map((terrains) => {
        return terrains.map((terrain) => {
          if (terrain.endsWith('s')) {
            return terrain.slice(0, -1);
          }
          return terrain;
        });
      }),
      // only unique values
      map((terrains) => {
        return terrains.filter((terrain, index) => {
          return terrains.indexOf(terrain) === index;
        });
      })
    );

    this.filteredPlanets$ = combineLatest([
      this.planets$,
      this.selectedTerrain.asObservable(),
    ]).pipe(
      map(([planets, selectedTerrain]) => {
        if (selectedTerrain === 'All') {
          return planets;
        } else {
          return planets.filter((planet) => {
            return planet.terrain.includes(selectedTerrain);
          });
        }
      })
    );
  }

  public selectTerrain(terrain: string) {
    this.selectedTerrain.next(terrain);
  }
}
