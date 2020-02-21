import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import * as fromPatientVIewState from '../../containers/reducers/index';
import * as PatientViewActions from '../../containers/actions/patient-view-status.actions';
import { Observable } from 'rxjs';
import { BackService } from 'src/app/containers/services/back.service';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorResponse } from 'src/app/Responses/Doctors.response';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import { HealthCare } from 'src/app/Models/healthCare';




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
  speciality = '';
  obra_social = ['IOMA', 'OSDE', 'SWISS MEDICAL'];
  starArray = [1,2,3,4,5];
  myControl = new FormControl();
  selectedOs = '';
  selectedRating;
  filterApplied = false;

  healthCares: HealthCare[] = [];


  filteredOptions: Observable<string[]>;

  specialistArray = ['Traumatologo', 'Cirujano', 'Pediatra', 'Kinesiologo', 'Nutricionista', 'Psicologo', 'Clinico', 'Oftalmologo', 'Oncologo', 'Reumatologo'];
  constructor( private backService: BackService,
     private patientViewStore: Store<fromPatientVIewState.State>
  ) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value),
        map(name => name ? this._filter(name) : this.specialistArray.slice())
      );

  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.specialistArray.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  goToHome = () => {
    this.patientViewStore.dispatch(new PatientViewActions.Home);
  }

  getAllHealthCares() {
    this.backService.getHealthCares().subscribe((healthCare) => {
      healthCare.forEach((healt) => {
        this.healthCares.push(new HealthCare(healt._id, healt.name));
      });
    });
  }

  onSelectedSpecialist = (specialistName: string): void => {

    this.doctorsBySpecialist = [];
    this.loader = true;
    this.backService.getBySpeciality(specialistName).subscribe((doctors) => {
      this.loader = false;
      doctors.forEach((doc: DoctorResponse) => {

        const prepaid: string[] = [];
        doc.doctor.prepaid.forEach(pp => {
          prepaid.push(pp.name);
        });

        let docAux: Doctor = new Doctor(doc.doctor._id, doc.doctor.person.birthDate,
          doc.doctor.person.dni, doc.doctor.person.firstName, doc.doctor.person.lastName,
          doc.doctor.person.phone, doc.doctor.speciality, prepaid , 3 );
          
          docAux.profileUrl = doc.doctor.profileUrl;
        this.doctorsBySpecialist.push(docAux);
      });
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
