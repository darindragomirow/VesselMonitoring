import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselLiquidContainerComponent } from './vessel-liquid-container.component';

describe('VesselLiquidContainerComponent', () => {
  let component: VesselLiquidContainerComponent;
  let fixture: ComponentFixture<VesselLiquidContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselLiquidContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselLiquidContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
