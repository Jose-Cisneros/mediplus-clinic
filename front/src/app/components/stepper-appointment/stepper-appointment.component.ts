import { AppointmentService } from './../../containers/services/appointment.service/appointment.service';
import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppointmentRequestComponent } from '../appointment-request/appointment-request.component';
import * as moment from 'moment';


@Component({
  selector: 'app-stepper-appointment',
  templateUrl: './stepper-appointment.component.html',
  styleUrls: ['./stepper-appointment.component.css']
})
export class StepperAppointmentComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  date: string;

  constructor(private _formBuilder: FormBuilder,
              private appointmentService: AppointmentService,
              public dialogRef: MatDialogRef<AppointmentRequestComponent>,
             @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    console.log(this.data);
    this.getNextAppointment();
  }

getNextAppointment() {
this.appointmentService.getNext(this.data.doctor._id).subscribe(
  (res) => {
    console.log('servicio', res);
  },
  (err) => console.log(err)
);
}

getAppointmentsOnDay() {
  console.log('entra');
  const day =  moment(this.date).format('DD-MM-YYYY');
  console.log(day);
  this.appointmentService.getOnDay(this.data.doctor._id, day).subscribe(
    (res) => {
    console.log('servicio2', res);
  },
  (err) => console.log(err)
);
}
}








