import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-yolo',
  templateUrl: './display-yolo.component.html',
  styleUrls: ['./display-yolo.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DisplayYoloComponent {
  @Input() nombre: number = 0;

  get yolos(): any[] {
    return Array(this.nombre);
  }

  trackByIndex(index: number, obj: any): number {
    return index;
  }
}
