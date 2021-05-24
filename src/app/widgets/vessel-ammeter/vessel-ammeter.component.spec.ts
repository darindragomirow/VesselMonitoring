import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselAmmeterComponent } from './vessel-ammeter.component';

describe('VesselAmmeterComponent', () => {
  let component: VesselAmmeterComponent;
  let fixture: ComponentFixture<VesselAmmeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselAmmeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselAmmeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
