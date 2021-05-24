import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselPowerPlantComponent } from './vessel-power-plant.component';

describe('VesselPowerPlantComponent', () => {
  let component: VesselPowerPlantComponent;
  let fixture: ComponentFixture<VesselPowerPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselPowerPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselPowerPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
