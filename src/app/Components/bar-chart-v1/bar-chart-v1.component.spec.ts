import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartV1Component } from './bar-chart-v1.component';

describe('BarChartV1Component', () => {
  let component: BarChartV1Component;
  let fixture: ComponentFixture<BarChartV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
