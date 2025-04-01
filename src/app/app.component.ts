import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonYtComponent } from './features/button-yt/button-yt.component';
import { L1Component } from './reactive/l1/l1.component';
import { L2Component } from './reactive/l2/l2.component';
import { ParentComponent } from './tp2/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonYtComponent,
    CommonModule,
    FormsModule,
    ParentComponent,
    L1Component,
    L2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 2020;

  years = new Array(10).fill(0).map((_, i) => 2025 + i);

  firstName = 'John';
  lastName = 'Doe';
  hello = 'Hello, ' + this.firstName + ' ' + this.lastName + '!';

  ngOnInit() {
    let incrementTitle = () => {
      this.updateYear(this.title + 1);
    };

    setInterval(incrementTitle, 3000);
  }

  updateYear(year: number) {
    console.log('year', year);
    this.title = year;
  }

  alert(text: string) {
    alert('Hello, ' + text + '!');
  }
}
