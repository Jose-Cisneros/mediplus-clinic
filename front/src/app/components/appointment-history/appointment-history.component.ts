import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerModule } from '@angular/material';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-appointment-history',
  templateUrl: './appointment-history.component.html',
  styleUrls: ['./appointment-history.component.scss']
})
export class AppointmentHistoryComponent implements OnInit {

  @Input() showCommentComponent: boolean;

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
