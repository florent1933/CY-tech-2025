import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { map, Observable, share } from 'rxjs';

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

  httpClient = inject(HttpClient);

  ngOnInit() {
    this.data$ = this.httpClient
      .get<ResponsePlanets>('https://swapi.py4e.com/api/planets')
      .pipe(share());

    this.planets$ = this.data$.pipe(map((response) => response.results));
  }
}
