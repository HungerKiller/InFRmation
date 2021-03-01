import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationFranceRegionsComponent } from './population-france-regions.component';

describe('PopulationFranceRegionsComponent', () => {
  let component: PopulationFranceRegionsComponent;
  let fixture: ComponentFixture<PopulationFranceRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationFranceRegionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationFranceRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
