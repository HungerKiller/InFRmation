import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartV1Component } from './line-chart-v1.component';

describe('LineChartV1Component', () => {
  let component: LineChartV1Component;
  let fixture: ComponentFixture<LineChartV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
