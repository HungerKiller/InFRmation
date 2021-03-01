import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRegionV1Component } from './table-region-v1.component';

describe('TableRegionV1Component', () => {
  let component: TableRegionV1Component;
  let fixture: ComponentFixture<TableRegionV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRegionV1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRegionV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
