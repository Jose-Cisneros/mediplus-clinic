import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import * as fromPatientVIewState from '../../containers/reducers/index';
import * as PatientViewActions from '../../containers/actions/patient-view-status.actions';
import { Observable } from 'rxjs';
import { BackService } from 'src/app/containers/services/back.service';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorResponse } from 'src/app/Responses/Doctors.response';

@Component({
  selector: 'app-patient-select-specialist',
  templateUrl: './patient-select-specialist.component.html',
  styleUrls: ['./patient-select-specialist.component.scss']
})
export class PatientSelectSpecialistComponent implements OnInit {

  specialistSelected = '';
  doctorsBySpecialist: Doctor[] = [];


  specialistArray = ['Traumatologo', 'Cirujano', 'Pediatra', 'Kinesiologo'];
  constructor( private backService: BackService, private http: HttpClient,
     private patientViewStore: Store<fromPatientVIewState.State>
  ) { }

  ngOnInit() {

  }
  goToHome = () => {
    this.patientViewStore.dispatch(new PatientViewActions.Home);
  }

  onSelectedSpecialist = (specialistName: string): void => {

    this.backService.getBySpeciality(specialistName).subscribe((doctors) => {
      doctors.forEach((doc: DoctorResponse) => {
        this.doctorsBySpecialist.push(new Doctor(doc._id, doc.person.birthDate, doc.person.dni, doc.person.firstName, doc.person.lastName, doc.person.phone, doc.speciality ))
      });
    });

    console.log(this.doctorsBySpecialist);
    // this.doctorsBySpecialist = this.http.get('/doctors/specialist/' + specialistName);
    // this.specialistSelected = specialistName;

    this.specialistSelected = specialistName;
  }

}
