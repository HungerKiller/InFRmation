import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoApiDepartementsComponent } from './geo-api-departements.component';

describe('GeoApiDepartementsComponent', () => {
  let component: GeoApiDepartementsComponent;
  let fixture: ComponentFixture<GeoApiDepartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoApiDepartementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoApiDepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
