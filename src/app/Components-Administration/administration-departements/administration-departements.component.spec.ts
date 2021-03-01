import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationDepartementsComponent } from './administration-departements.component';

describe('AdministrationDepartementsComponent', () => {
  let component: AdministrationDepartementsComponent;
  let fixture: ComponentFixture<AdministrationDepartementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationDepartementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationDepartementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
