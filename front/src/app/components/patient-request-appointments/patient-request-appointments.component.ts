import { Component, OnInit, Input} from '@angular/core';
import * as fromPatientVIewState from '../../containers/reducers/index';
import * as PatientViewActions from '../../containers/actions/patient-view-status.actions';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-patient-request-appointments',
  templateUrl: './patient-request-appointments.component.html',
  styleUrls: ['./patient-request-appointments.component.css']
})
export class PatientRequestAppointmentsComponent implements OnInit {

  @Input() doctor: any;
  date: string;
  constructor(
    private http: HttpClient,
    private patientViewStore: Store<fromPatientVIewState.State>
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this.patientViewStore.dispatch(new PatientViewActions.Home);
  }
  onSubmit() {
    this.http.post<any>('/doctors/request-appointment', {_id: this.doctor._id, date: this.date }).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
