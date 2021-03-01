import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoApiCommunesComponent } from './geo-api-communes.component';

describe('GeoApiCommunesComponent', () => {
  let component: GeoApiCommunesComponent;
  let fixture: ComponentFixture<GeoApiCommunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoApiCommunesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoApiCommunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
