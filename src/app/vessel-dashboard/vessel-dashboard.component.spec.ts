import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselDashboardComponent } from './vessel-dashboard.component';

describe('VesselDashboardComponent', () => {
  let component: VesselDashboardComponent;
  let fixture: ComponentFixture<VesselDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
