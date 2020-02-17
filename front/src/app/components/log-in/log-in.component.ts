import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/containers/services/auth.service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user = {email: '', password: '' };
  showAlert: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.logIn(this.user).subscribe(
     data => {
       console.log('respuesta', data);
       localStorage.setItem('token', data.token);
       if (data) {
         this.router.navigate(['']);
       }
       this.showAlert = true ;

     });

 }

}
