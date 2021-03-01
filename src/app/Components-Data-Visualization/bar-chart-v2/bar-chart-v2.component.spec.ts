import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartV2Component } from './bar-chart-v2.component';

describe('BarChartV2Component', () => {
  let component: BarChartV2Component;
  let fixture: ComponentFixture<BarChartV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
