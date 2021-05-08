import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselEngineTurbochargingComponent } from './vessel-engine-turbocharging.component';

describe('VesselEngineTurbochargingComponent', () => {
  let component: VesselEngineTurbochargingComponent;
  let fixture: ComponentFixture<VesselEngineTurbochargingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselEngineTurbochargingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselEngineTurbochargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
