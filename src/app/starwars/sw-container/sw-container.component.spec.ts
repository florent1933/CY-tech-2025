import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwContainerComponent } from './sw-container.component';

describe('SwContainerComponent', () => {
  let component: SwContainerComponent;
  let fixture: ComponentFixture<SwContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
