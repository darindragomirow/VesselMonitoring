import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselEngineCylindersComponent } from './vessel-engine-cylinders.component';

describe('VesselEngineCylindersComponent', () => {
  let component: VesselEngineCylindersComponent;
  let fixture: ComponentFixture<VesselEngineCylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselEngineCylindersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselEngineCylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
