import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFranceComponent } from './view-france.component';

describe('ViewFranceComponent', () => {
  let component: ViewFranceComponent;
  let fixture: ComponentFixture<ViewFranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
