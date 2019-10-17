import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BackService } from 'src/app/containers/services/back.service';
import { Doctor } from 'src/app/Models/doctor';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormFieldModule, MatInputModule } from '@angular/material';



@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.scss']
})
export class AppointmentRequestComponent implements OnInit {

  @Input() doctor: Doctor;
  date: string;
  hour: string;

  constructor(
    private backService: BackService,
    public dialogRef: MatDialogRef<AppointmentRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

  }


  ngOnInit() {
  }

  onSubmit() {

    this.backService.postAppointment(this.data.doctor.id, '5da775b0e4d594146bf56599', this.date, this.hour).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
