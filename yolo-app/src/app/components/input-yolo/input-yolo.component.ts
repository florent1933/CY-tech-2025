import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-yolo',
  templateUrl: './input-yolo.component.html',
  styleUrls: ['./input-yolo.component.css'],
  standalone: true,
  imports: [FormsModule] // nécessaire pour ngModel
})
export class InputYoloComponent {
  nombre: number = 0;

  @Output()
  nombreChange = new EventEmitter<number>();

  updateNombre() {
    this.nombreChange.emit(Number(this.nombre));
  }
  
}
