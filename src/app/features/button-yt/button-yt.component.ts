import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-yt',
  imports: [],
  templateUrl: './button-yt.component.html',
  styleUrl: './button-yt.component.scss',
})
export class ButtonYtComponent {
  @Input() text = 'Button';
  @Output() onClick = new EventEmitter<string>();
}
