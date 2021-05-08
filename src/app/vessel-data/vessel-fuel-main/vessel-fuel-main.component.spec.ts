import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselFuelMainComponent } from './vessel-fuel-main.component';

describe('VesselFuelMainComponent', () => {
  let component: VesselFuelMainComponent;
  let fixture: ComponentFixture<VesselFuelMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselFuelMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselFuelMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
