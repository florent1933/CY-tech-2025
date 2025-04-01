import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputYoloComponent } from './input-yolo.component';

describe('InputYoloComponent', () => {
  let component: InputYoloComponent;
  let fixture: ComponentFixture<InputYoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputYoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputYoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
