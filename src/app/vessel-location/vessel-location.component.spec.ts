import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselLocationComponent } from './vessel-location.component';

describe('VesselLocationComponent', () => {
  let component: VesselLocationComponent;
  let fixture: ComponentFixture<VesselLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
