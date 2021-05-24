import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselCrewTasksComponent } from './vessel-crew-tasks.component';

describe('VesselCrewTasksComponent', () => {
  let component: VesselCrewTasksComponent;
  let fixture: ComponentFixture<VesselCrewTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselCrewTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselCrewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
