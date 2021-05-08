import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselToggleComponent } from './vessel-toggle.component';

describe('VesselToggleComponent', () => {
  let component: VesselToggleComponent;
  let fixture: ComponentFixture<VesselToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
