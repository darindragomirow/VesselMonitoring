import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselPowerPlantStatisticsComponent } from './vessel-power-plant-statistics.component';

describe('VesselPowerPlantStatisticsComponent', () => {
  let component: VesselPowerPlantStatisticsComponent;
  let fixture: ComponentFixture<VesselPowerPlantStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselPowerPlantStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselPowerPlantStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
