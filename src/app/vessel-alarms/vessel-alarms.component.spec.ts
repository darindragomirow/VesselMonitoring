import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselAlarmsComponent } from './vessel-alarms.component';

describe('VesselAlarmsComponent', () => {
  let component: VesselAlarmsComponent;
  let fixture: ComponentFixture<VesselAlarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselAlarmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
