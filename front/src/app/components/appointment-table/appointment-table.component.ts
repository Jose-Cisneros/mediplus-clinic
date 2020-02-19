import { SnackbarComponent } from './../snackbar/snackbar.component';
import { AppointmentService } from './../../containers/services/appointment.service/appointment.service';
import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { element } from '@angular/core/src/render3/instructions';
import { AppointmentInfo } from '../../models/appointmentInfo';

 let ELEMENT_DATA: AppointmentInfo[] = [ ] ;
@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AppointmentTableComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['name', 'day', 'hour', 'options'];
  expandedElement: AppointmentInfo | null;
  AppointmentInfo: AppointmentInfo ;
  durationInSeconds = 3;
  loading = true;
  doctorSelected = '';
  constructor (private service: AppointmentService,
               ) { }

  ngOnInit() {
  this.doctorSelected =  localStorage.getItem('doctorSelected');
  localStorage.removeItem('doctorSelected;');
   this.getPendingAppointments(this.doctorSelected);

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   getPendingAppointments (id: string) {
     ELEMENT_DATA = [];
    this.service.getPendingAppointments(id).subscribe(
      data => {
       data.forEach(element => {
         console.log(element);
        ELEMENT_DATA.push(new AppointmentInfo(element.patient.person.firstName, element.patient.person.lastName,
                         element.date, element.hour, element._id ));
       });
       this.dataSource = new MatTableDataSource(ELEMENT_DATA);
       this.loading = false;
       console.log(ELEMENT_DATA);
      });
    }

    aproveAppointment(appointmentId: string) {
     this.service.approveAppointment(appointmentId).subscribe(
      data => {
        if ( data.success = true) {

          this.getPendingAppointments(this.doctorSelected);
        }
        console.log(data);
      });
    }

    rejectAppointment(appointmentId: string) {
      this.service.rejectAppointment(appointmentId).subscribe(
        data => {
          if ( data.success = true) {

            this.getPendingAppointments(this.doctorSelected);
          }
          console.log(data);
        });
      }




  }


