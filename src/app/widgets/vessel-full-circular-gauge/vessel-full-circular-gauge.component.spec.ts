import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselFullCircularGaugeComponent } from './vessel-full-circular-gauge.component';

describe('VesselFullCircularGaugeComponent', () => {
  let component: VesselFullCircularGaugeComponent;
  let fixture: ComponentFixture<VesselFullCircularGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselFullCircularGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselFullCircularGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
