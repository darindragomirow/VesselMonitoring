import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselCoolingComponent } from './vessel-cooling.component';

describe('VesselCoolingComponent', () => {
  let component: VesselCoolingComponent;
  let fixture: ComponentFixture<VesselCoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselCoolingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselCoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
