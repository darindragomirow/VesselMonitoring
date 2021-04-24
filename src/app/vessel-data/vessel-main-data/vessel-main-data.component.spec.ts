import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselMainDataComponent } from './vessel-main-data.component';

describe('VesselMainDataComponent', () => {
  let component: VesselMainDataComponent;
  let fixture: ComponentFixture<VesselMainDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselMainDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VesselMainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
