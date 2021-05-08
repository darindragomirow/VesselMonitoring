import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselThrustersComponent } from './vessel-thrusters.component';

describe('VesselThrustersComponent', () => {
  let component: VesselThrustersComponent;
  let fixture: ComponentFixture<VesselThrustersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselThrustersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselThrustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
