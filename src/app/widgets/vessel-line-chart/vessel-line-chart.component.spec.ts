import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselLineChartComponent } from './vessel-line-chart.component';

describe('VesselLineChartComponent', () => {
  let component: VesselLineChartComponent;
  let fixture: ComponentFixture<VesselLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
