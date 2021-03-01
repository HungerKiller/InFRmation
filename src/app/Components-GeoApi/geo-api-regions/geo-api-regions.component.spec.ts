import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoApiRegionsComponent } from './geo-api-regions.component';

describe('GeoApiRegionsComponent', () => {
  let component: GeoApiRegionsComponent;
  let fixture: ComponentFixture<GeoApiRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoApiRegionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoApiRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
