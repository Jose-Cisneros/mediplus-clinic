import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/containers/services/auth.service/auth.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})

export class PatientProfileComponent implements OnInit {
  user: User;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.auth.currentUser().subscribe(
      data => {
        this.user = new User(data._id, data.person.firstName, data.person.lastName, data.person.phone, data.person.birthDate, data.person.dni);
      },
    );
  }
}
