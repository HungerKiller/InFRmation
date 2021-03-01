import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationFranceDepartementsComponent } from './population-france-departements.component';

describe('PopulationFranceDepartementsComponent', () => {
  let component: PopulationFranceDepartementsComponent;
  let fixture: ComponentFixture<PopulationFranceDepartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationFranceDepartementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationFranceDepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
