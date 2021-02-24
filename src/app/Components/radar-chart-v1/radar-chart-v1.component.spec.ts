import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarChartV1Component } from './radar-chart-v1.component';

describe('RadarChartV1Component', () => {
  let component: RadarChartV1Component;
  let fixture: ComponentFixture<RadarChartV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarChartV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarChartV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
