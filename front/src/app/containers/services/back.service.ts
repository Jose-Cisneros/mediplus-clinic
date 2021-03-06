import { User } from './../../Models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class BackService {

  constructor(private httpClient: HttpClient) {

  }
  getAllDoctors(): Observable<any> {
    return this.httpClient.get('/doctors/all');
  }

  getBySpeciality(speciality: string): Observable<any> {
    return this.httpClient.get('/doctors/specialist/' + speciality);
  }

  // se utiliza para crear un turno cuando no se tiene un paciente logueado
  requetsAppointment(doctorId: string, patientId: string, date: string, hour: string, observation: string): Observable<any> {
    return this.httpClient.post('/doctors/request-appointment', {
      doctor_id: doctorId,
      patient_id: patientId,
      date: date,
      hour: hour,
      observation: observation
    });
  }
// se utiliza para crear un turno cuando  se tiene un paciente logueado
  requetsAppointmentLoged(doctorId: string,  date: string, hour: string): Observable<any> {
    return this.httpClient.post('/doctors/request-appointment-logged', {
      doctor_id: doctorId,
      date: date,
      hour: hour
    },
    {headers: new HttpHeaders({'Authorization': localStorage.getItem('token') })}
      );
  }

  // esta hardcodeado deberia pasarse el id del paciente logeado como parametro y tambien concatenarlo al link
  getAllAppointmentsFromPatient(): Observable<any> {
    return this.httpClient.get('/appointments/patient/5da480fd64fed67c60b5fa77');
  }

  createPatient( user: User): Observable<any> {
    return this.httpClient.post('/pacientes/createPatient', { user

    });
  }

  getHealthCares( ): Observable<any> {
    return this.httpClient.get('/healthcare/allPrepaids');
  }
}
