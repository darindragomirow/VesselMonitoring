import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselCircularGaugeComponent } from './vessel-circular-gauge.component';

describe('VesselCircularGaugeComponent', () => {
  let component: VesselCircularGaugeComponent;
  let fixture: ComponentFixture<VesselCircularGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselCircularGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselCircularGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
