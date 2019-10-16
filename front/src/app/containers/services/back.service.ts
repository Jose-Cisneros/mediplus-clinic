import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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

  postAppointment(doctorId: string, patientId: string, date: string, hour: string): Observable<any> {
    return this.httpClient.post('/doctors/request-appointment', {
      doctor_id: doctorId,
      patient_id: patientId,
      date: date,
      hour: hour
    });
  }

}
