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
  dateSelected: string;
  nextDay = new Date();
  SelectedDay = new Date();

  constructor(private _formBuilder: FormBuilder,
              private appointmentService: AppointmentService,
              public dialogRef: MatDialogRef<AppointmentRequestComponent>,
             @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    moment.locale('es');
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.getNextAppointment();
  }

getNextAppointment() {
  this.nextDay = new Date();
  console.log(this.data);
this.appointmentService.getNext(this.data.doctor._id).subscribe(
  (res) => {
    this.nextDay.date = res.date;
    this.nextDay.dateName = moment(res.date, 'DD-MM-YYYY' ).format('dddd');
    this.getDay(res.date);
    console.log('nextDay', this.nextDay);
  },
  (err) => console.log(err)
);
}

getAppointmentsOnDay() {
  this.SelectedDay = new Date();
  const day =  moment(this.dateSelected).format('DD-MM-YYYY');
  this.appointmentService.getOnDay(this.data.doctor._id, day).subscribe(
    (data: []) => {
      this.SelectedDay.date = moment(this.dateSelected).format('DD-MM-YYYY');
      this.SelectedDay.dateName = moment(this.dateSelected, 'DD-MM-YYYY' ).format('dddd');
      this.SelectedDay.availableHours = data;
      console.log('selectedDAy', this.SelectedDay);

  },
  (err) => console.log(err)
);
}

getDay(date: string) {
  this.appointmentService.getOnDay(this.data.doctor._id, date).subscribe(
    (data: []) => {
      this.nextDay.availableHours = data;
  },
  (err) => console.log(err)
);

}

}

export class Date {
  date: string;
  dateName: string;
  availableHours: string[];

}







