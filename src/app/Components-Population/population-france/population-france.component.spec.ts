import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationFranceComponent } from './population-france.component';

describe('PopulationFranceComponent', () => {
  let component: PopulationFranceComponent;
  let fixture: ComponentFixture<PopulationFranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationFranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
