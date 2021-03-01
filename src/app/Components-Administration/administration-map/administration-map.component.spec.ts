import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationMapComponent } from './administration-map.component';

describe('MapChartRegionsComponent', () => {
  let component: AdministrationMapComponent;
  let fixture: ComponentFixture<AdministrationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
