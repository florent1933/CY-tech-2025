import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayYoloComponent } from './display-yolo.component';

describe('DisplayYoloComponent', () => {
  let component: DisplayYoloComponent;
  let fixture: ComponentFixture<DisplayYoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayYoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayYoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
