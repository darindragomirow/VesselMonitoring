import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselCompressedAirComponent } from './vessel-compressed-air.component';

describe('VesselCompressedAirComponent', () => {
  let component: VesselCompressedAirComponent;
  let fixture: ComponentFixture<VesselCompressedAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselCompressedAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselCompressedAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
