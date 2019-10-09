import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-appointment-request',
  templateUrl: './appointment-request.component.html',
  styleUrls: ['./appointment-request.component.css']
})
export class AppointmentRequestComponent implements OnInit {

  @Input() doctor: any;
  date: string;
  constructor(private http: HttpClient) {

  }


  ngOnInit() {
  }

  onSubmit() {

    this.http.post<any>('/doctors/request-appointment', {_id: this.doctor._id, date: this.date }).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
