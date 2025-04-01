import { Component } from '@angular/core';
import { DisplayYoloComponent } from '../display-yolo/display-yolo.component';

@Component({
  selector: 'app-tp2-parent',
  imports: [DisplayYoloComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
  reset() {
    this.counter = 0;
  }
}
