import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapChartRegionV1Component } from './map-chart-region-v1.component';

describe('MapChartRegionV1Component', () => {
  let component: MapChartRegionV1Component;
  let fixture: ComponentFixture<MapChartRegionV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapChartRegionV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapChartRegionV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
