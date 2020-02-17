import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerModule } from '@angular/material';
import { CommentComponent } from '../comment/comment.component';
import { Appointment } from 'src/app/Models/appointment';

@Component({
  selector: 'app-calendar-appointment',
  templateUrl: './calendar-appointment.component.html',
  styleUrls: ['./calendar-appointment.component.scss']
})

export class CalendarAppointmentComponent implements OnInit {
  @Input() appointment: Appointment;
  showCommentComponent: boolean;

  constructor(
    public dialog: MatDialog ) { }

    ngOnInit() {
      this.showCommentComponent = false;
    }

  comment(): void {
    const dialogRef = this.dialog.open(CommentComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

