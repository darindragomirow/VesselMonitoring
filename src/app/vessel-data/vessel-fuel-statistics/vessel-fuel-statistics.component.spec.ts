import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselFuelStatisticsComponent } from './vessel-fuel-statistics.component';

describe('VesselFuelStatisticsComponent', () => {
  let component: VesselFuelStatisticsComponent;
  let fixture: ComponentFixture<VesselFuelStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselFuelStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselFuelStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
