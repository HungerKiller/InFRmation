import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartV1Component } from './pie-chart-v1.component';

describe('PieChartV1Component', () => {
  let component: PieChartV1Component;
  let fixture: ComponentFixture<PieChartV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
