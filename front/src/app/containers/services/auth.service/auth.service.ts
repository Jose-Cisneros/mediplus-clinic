import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  logIn( user: {email: string, password: string} ): Observable<any> {
    return this.httpClient.post('/auth/login', { user });
}
}
