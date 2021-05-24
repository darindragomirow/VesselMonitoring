import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselDataCounterComponent } from './vessel-data-counter.component';

describe('VesselDataCounterComponent', () => {
  let component: VesselDataCounterComponent;
  let fixture: ComponentFixture<VesselDataCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselDataCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselDataCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
