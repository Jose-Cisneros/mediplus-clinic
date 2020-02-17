import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/Models/appointment';
import { BackService } from 'src/app/containers/services/back.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppointmentResponse } from 'src/app/Responses/Appointments.response';
import * as fromPatientVIewState from '../../containers/reducers/index';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  allAppointmentslist: Appointment[] = [];
  today = new Date();
  loader = false;

  constructor( private backService: BackService, private http: HttpClient,
    private patientViewStore: Store<fromPatientVIewState.State>
 ) { }

  ngOnInit() {
    console.log(this.today);
    this.allAppointmentslist = [];
    this.loader = true;
    this.backService.getAllAppointmentsFromPatient().subscribe((appointment) => {
      this.loader = false;
      appointment.forEach((appoint: AppointmentResponse) => {
        this.allAppointmentslist.push(new Appointment(appoint._id, appoint.doctor.person.firstName, appoint.doctor.person.lastName, appoint.doctor.speciality, appoint.date, appoint.hour))
      });
    });
    console.log(this.allAppointmentslist);
  }
}
