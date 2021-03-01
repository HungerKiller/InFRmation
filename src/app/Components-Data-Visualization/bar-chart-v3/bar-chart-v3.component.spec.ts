import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartV3Component } from './bar-chart-v3.component';

describe('BarChartV3Component', () => {
  let component: BarChartV3Component;
  let fixture: ComponentFixture<BarChartV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartV3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
