import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-yolo',
  imports: [CommonModule],
  templateUrl: './display-yolo.component.html',
  styleUrl: './display-yolo.component.scss',
})
export class DisplayYoloComponent {
  @Input() counter: number = 0;

  getArray(counter: number) {
    return new Array(counter).fill(0);
  }

  getColor(counter: number, reverse: boolean) {
    // return counter % 2 === 0 ? 'blue' : 'red';
    //  arc en ciel
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple','pink'];
    if (reverse) {
      return colors[colors.length - 2 - (counter % colors.length)];
    }

    return colors[counter % colors.length];
  }
}
