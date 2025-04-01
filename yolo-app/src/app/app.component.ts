import { Component } from '@angular/core';
import { InputYoloComponent } from './components/input-yolo/input-yolo.component';
import { DisplayYoloComponent } from './components/display-yolo/display-yolo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [InputYoloComponent, DisplayYoloComponent]
})
export class AppComponent {
  nombreYolo: number = 0;

  onNombreYoloChanged(newNombre: number) {
    this.nombreYolo = Number(newNombre);
  }
}
