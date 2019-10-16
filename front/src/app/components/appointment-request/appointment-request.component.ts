import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BackService } from 'src/app/containers/services/back.service';
import { Doctor } from 'src/app/Models/doctor';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.css']
})
export class AppointmentRequestComponent implements OnInit {

  @Input() doctor: Doctor;
  date: string;

  constructor(
    private backService: BackService,
    public dialogRef: MatDialogRef<AppointmentRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Doctor) {

  }


  ngOnInit() {
  }

  onSubmit() {

    this.backService.postAppointment(this.doctor.id, '5da775b0e4d594146bf56599', this.date, '10:00').subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
