import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonYtComponent } from './button-yt.component';

describe('ButtonYtComponent', () => {
  let component: ButtonYtComponent;
  let fixture: ComponentFixture<ButtonYtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonYtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonYtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
