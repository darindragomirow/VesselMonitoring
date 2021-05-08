import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselArcGaugeComponent } from './vessel-arc-gauge.component';

describe('VesselArcGaugeComponent', () => {
  let component: VesselArcGaugeComponent;
  let fixture: ComponentFixture<VesselArcGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselArcGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselArcGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
