import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-l1',
  imports: [CommonModule],
  templateUrl: './l1.component.html',
  styleUrl: './l1.component.scss',
})
export class L1Component {
  x: string;
  sub: Subscription;

  public getObservable() {
    return from(['Hello', 'World', 'from', 'RxJS']);
  }

  ngOnInit() {
    this.sub = this.getObservable().subscribe((data) => {
      console.log('data', data);
      this.x = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
