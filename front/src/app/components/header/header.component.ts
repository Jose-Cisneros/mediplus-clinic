import { AuthService } from 'src/app/containers/services/auth.service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/Models/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
    console.log('user', this.user);
  }

  getCurrentUser() {
    this.auth.currentUser().subscribe(
      data => {
        this.user = new User(data._id, data.person.firstName, data.person.lastName, data.person.phone);
      },
      err => console.log(err)
    );
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['logIn']);

    }


}
