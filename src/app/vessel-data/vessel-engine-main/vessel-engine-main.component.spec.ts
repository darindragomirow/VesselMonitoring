import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselEngineMainComponent } from './vessel-engine-main.component';

describe('VesselEngineMainComponent', () => {
  let component: VesselEngineMainComponent;
  let fixture: ComponentFixture<VesselEngineMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselEngineMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselEngineMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
