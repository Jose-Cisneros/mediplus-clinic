import { Component, OnInit, Input} from '@angular/core';
import { Observable } from 'rxjs';
import * as fromPatientVIewState from '../../containers/reducers/index';
import * as PatientViewActions from '../../containers/actions/patient-view-status.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-doctor-filtered',
  templateUrl: './doctor-filtered.component.html',
  styleUrls: ['./doctor-filtered.component.css']
})
export class DoctorFilteredComponent implements OnInit {

  @Input() doctor: any;
  showRequestComponent = false;

  constructor(
    private patientViewStore: Store<fromPatientVIewState.State>
  ) { }

  ngOnInit() {
  }

  requestAppointment() {
    this.patientViewStore.dispatch(new PatientViewActions.RequestAppointment);
  }

}
