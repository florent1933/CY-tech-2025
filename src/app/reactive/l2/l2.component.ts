import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { combineLatest, from, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-l2',
  imports: [CommonModule],
  templateUrl: './l2.component.html',
  styleUrl: './l2.component.scss',
})
export class L2Component {
  x$: Observable<string>;

  xx$: Observable<string>;

  public getObservable() {
    return from(['Hello', 'World', 'from', 'RxJS']);
  }

  public getObservable2() {
    return from(['Bonjour', '1', '2', '3']);
  }

  ngOnInit() {
    this.x$ = this.getObservable().pipe(
      map((data) => {
        return `${data} ${data}`;
      }),
      tap((data) => {
        console.log('data2', data);
      })
    );

    this.xx$ = combineLatest([
      this.getObservable(),
      this.getObservable2(),
    ]).pipe(
      map(([data1, data2]) => {
        return `${data1} ${data2}`;
      }),
      tap((data) => {
        console.log('data', data);
      })
    );
  }
}
