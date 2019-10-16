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

}
