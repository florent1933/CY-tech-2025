import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L1Component } from './l1.component';

describe('L1Component', () => {
  let component: L1Component;
  let fixture: ComponentFixture<L1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
