import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedAreaChartV1Component } from './stacked-area-chart-v1.component';

describe('StackedAreaChartV1Component', () => {
  let component: StackedAreaChartV1Component;
  let fixture: ComponentFixture<StackedAreaChartV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedAreaChartV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedAreaChartV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
