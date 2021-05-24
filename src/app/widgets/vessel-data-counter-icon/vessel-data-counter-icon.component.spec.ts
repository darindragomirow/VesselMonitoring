import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselDataCounterIconComponent } from './vessel-data-counter-icon.component';

describe('VesselDataCounterIconComponent', () => {
  let component: VesselDataCounterIconComponent;
  let fixture: ComponentFixture<VesselDataCounterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselDataCounterIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselDataCounterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
