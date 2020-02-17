import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperAppointmentComponent } from './stepper-appointment.component';

describe('StepperAppointmentComponent', () => {
  let component: StepperAppointmentComponent;
  let fixture: ComponentFixture<StepperAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
