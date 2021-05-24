import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselCrewShiftsComponent } from './vessel-crew-shifts.component';

describe('VesselCrewShiftsComponent', () => {
  let component: VesselCrewShiftsComponent;
  let fixture: ComponentFixture<VesselCrewShiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselCrewShiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselCrewShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
