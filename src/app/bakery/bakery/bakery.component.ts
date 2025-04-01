import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { combineLatest, map, Observable, scan, share, tap, timer } from 'rxjs';

const CHOCOLATINE_PRICE = 1.2;
const CROISSANT_PRICE = 1.1;

@Component({
  selector: 'app-bakery',
  imports: [CommonModule],
  templateUrl: './bakery.component.html',
  styleUrl: './bakery.component.scss',
})
export class BakeryComponent {
  factoryTimer$ = timer(0, 4000);

  painAuChocolats$: Observable<number>;
  stockPainAuChocolats$: Observable<number>;
  stockPricePainAuChocolat$: Observable<number>;

  croissants$: Observable<number>;
  stockCroissant$: Observable<number>;
  stockPriceCroissant$: Observable<number>;

  stockPrice$: Observable<number>;

  customerVisitsTimer$ = timer(0, 8000);
  customerVisits$: Observable<number>;
  customerVisitsCounts$: Observable<number>;

  buyingPainAuChocolat$: Observable<number>;
  buyingCroissant$: Observable<number>;

  buyingPainAuChocolatCount$: Observable<number>;
  buyingCroissantCount$: Observable<number>;

  totalSold$: Observable<number>;

  ngOnInit() {
    this.customerVisits$ = this.customerVisitsTimer$.pipe(
      map((value) => this.randomNumberBetween(1, 5)),
      tap((value) => {
        console.log('customer', value);
      }),
      share()
    );

    this.customerVisitsCounts$ = this.customerVisits$.pipe(
      scan((acc, value) => {
        return acc + value;
      }, 0),
      share()
    );

    this.buyingPainAuChocolat$ = this.customerVisits$.pipe(
      map((value) => this.randomNumberBetween(0, value) * 2),
      tap((value) => {
        console.log('buying pain au chocolat', value);
      }),
      share()
    );

    this.buyingCroissant$ = this.customerVisits$.pipe(
      map((value) => this.randomNumberBetween(0, value) * 4),
      tap((value) => {
        console.log('buying croissant', value);
      }),
      share()
    );

    this.buyingCroissantCount$ = this.buyingCroissant$.pipe(
      scan((acc, value) => {
        return acc + value;
      }, 0),
      share()
    );
    this.buyingPainAuChocolatCount$ = this.buyingPainAuChocolat$.pipe(
      scan((acc, value) => {
        return acc + value;
      }, 0),
      share()
    );

    this.totalSold$ = combineLatest([
      this.buyingPainAuChocolatCount$,
      this.buyingCroissantCount$,
    ]).pipe(
      map(([painAuChocolat, croissant]) => {
        return painAuChocolat * CHOCOLATINE_PRICE + croissant * CROISSANT_PRICE;
      }),
      share()
    );

    this.painAuChocolats$ = this.factoryTimer$.pipe(
      // 1 pain au chocolat toutes les 2 secondes
      map((value) => this.randomNumberBetween(8, 12)),
      tap((value) => {
        console.log('pain au chocolat', value);
      }),
      share()
    );

    this.stockPainAuChocolats$ = this.painAuChocolats$.pipe(
      scan((acc, value) => {
        return acc + value;
      }, 0),
      share()
    );

    this.stockPricePainAuChocolat$ = this.stockPainAuChocolats$.pipe(
      map((value) => {
        return value * CHOCOLATINE_PRICE;
      }),
      share()
    );

    this.croissants$ = this.factoryTimer$.pipe(
      // 1 pain au chocolat toutes les 2 secondes
      map((value) => this.randomNumberBetween(20, 30)),
      tap((value) => {
        console.log('croisant', value);
      }),
      share()
    );

    this.stockCroissant$ = this.croissants$.pipe(
      scan((acc, value) => {
        return acc + value;
      }, 0),
      share()
    );

    this.stockPriceCroissant$ = this.stockCroissant$.pipe(
      map((value) => {
        return value * CROISSANT_PRICE;
      }),
      share()
    );

    this.stockPrice$ = combineLatest([
      this.stockPricePainAuChocolat$,
      this.stockPriceCroissant$,
    ]).pipe(
      map(([painAuChocolat, croissant]) => {
        return painAuChocolat + croissant;
      }),
      share()
    );
  }

  private randomNumberBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
