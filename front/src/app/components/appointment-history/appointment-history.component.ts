import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerModule } from '@angular/material';
import { Appointment } from 'src/app/Models/appointment';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.scss']
})
export class AppointmentHistoryComponent implements OnInit {

  @Input() appointment: Appointment;
  showCommentComponent: boolean;

  constructor(
    public dialog: MatDialog ) { }

    ngOnInit() {
      this.showCommentComponent = false;
    }

}
