import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselLinearGaugeComponent } from './vessel-linear-gauge.component';

describe('VesselLinearGaugeComponent', () => {
  let component: VesselLinearGaugeComponent;
  let fixture: ComponentFixture<VesselLinearGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselLinearGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselLinearGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
