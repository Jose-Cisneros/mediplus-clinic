
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  ngOnInit() {
  }

}
