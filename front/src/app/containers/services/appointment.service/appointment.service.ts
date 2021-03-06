import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient: HttpClient) { }

 getNext(id: string) {
  return this.httpClient.get('/doctors/next/' + id);
 }

 getOnDay(id: string, date: string) {
   return this.httpClient.get('/doctors/onDay/' + id + '/' + date );
 }

 getPendingAppointments( id: string): Observable<any> {
  return this.httpClient.get('/doctors/PendingAppointments/' + id);
}

approveAppointment( id: string ): Observable<any> {
  return this.httpClient.post('/doctors/ApproveAppointment/' + id, {});
}


rejectAppointment( id: string ): Observable<any> {
  return this.httpClient.post('/doctors/rejectAppointment/' + id, {});
}

}
