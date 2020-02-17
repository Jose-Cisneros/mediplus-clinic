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
  doctorsBySpecialistCopy: Doctor[] = [];
  loader = false;

  obra_social = ['IOMA', 'OSDE', 'SWISS MEDICAL'];
  starArray = [1,2,3,4,5];

  selectedOs = '';
  selectedRating;
  filterApplied = false;



  specialistArray = ['Traumatologo', 'Cirujano', 'Pediatra', 'Kinesiologo'];
  constructor( private backService: BackService,
     private patientViewStore: Store<fromPatientVIewState.State>
  ) { }

  ngOnInit() {

  }
  goToHome = () => {
    this.patientViewStore.dispatch(new PatientViewActions.Home);
  }

  onSelectedSpecialist = (specialistName: string): void => {

    this.doctorsBySpecialist = [];
    this.loader = true;
    this.backService.getBySpeciality(specialistName).subscribe((doctors) => {
      this.loader = false;
      doctors.forEach((doc: DoctorResponse) => {
        this.doctorsBySpecialist.push(new Doctor(doc._id, doc.person.birthDate, doc.person.dni, doc.person.firstName, doc.person.lastName, doc.person.phone, doc.speciality, ['IOMA'], 3 ))
      });

    this.doctorsBySpecialist.push(new Doctor('1', '01-12-1996',400,'juan','pard', 2221234, 'Traumatologo', ['OSDE'], 5));
    this.doctorsBySpecialistCopy = this.doctorsBySpecialist;
    });

    this.specialistSelected = specialistName;
  }


  starArrayBuilder(n: number) {
    return new Array(n);
  }

  applyFilters = () => {

    this.filterApplied = true;

    let doctorFilteredAux = this.doctorsBySpecialist;

    if (this.selectedOs !== '' && this.selectedOs !== undefined) {
      doctorFilteredAux = doctorFilteredAux.filter(doc => doc.prepaid.includes(this.selectedOs) == true);
    }

    if (this.selectedRating != undefined) {
      doctorFilteredAux = doctorFilteredAux.filter(doc => this.selectedRating <= doc.rating);
    }

    this.doctorsBySpecialistCopy = doctorFilteredAux;
  }

  removeFilters = () => {
    this.doctorsBySpecialistCopy = this.doctorsBySpecialist;
    this.filterApplied = false;
  }
}
