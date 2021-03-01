import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationRegionsComponent } from './administration-regions.component';

describe('AdministrationRegionsComponent', () => {
  let component: AdministrationRegionsComponent;
  let fixture: ComponentFixture<AdministrationRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationRegionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
