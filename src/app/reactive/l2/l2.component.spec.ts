import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L2Component } from './l2.component';

describe('L2Component', () => {
  let component: L2Component;
  let fixture: ComponentFixture<L2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [L2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(L2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
