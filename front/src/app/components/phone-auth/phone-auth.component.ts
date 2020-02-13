import { PhoneNumber } from './../../Models/phone';
import { WindowService } from './../../containers/services/window.service/window.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.component.html',
  styleUrls: ['./phone-auth.component.css']
})
export class PhoneAuthComponent implements OnInit {

  windowRef: any;

  phoneNumber = new PhoneNumber();

  verificationCode: string;

  user: any;

  constructor(private windowService: WindowService) { }

  ngOnInit() {
    const firebaseConfig = {
      apiKey: 'AIzaSyC2hO7gE6HGux48_R4cQtgCHwNz45ktMxQ',
      authDomain: 'mediplus-antentication.firebaseapp.com',
      databaseURL: 'https://mediplus-antentication.firebaseio.com',
      projectId: 'mediplus-antentication',
      storageBucket: 'mediplus-antentication.appspot.com',
      messagingSenderId: '97310092855',
      appId: '1:97310092855:web:58d311125ec2b22a2819b2',
      measurementId: 'G-RC49PHRXG9'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    this.windowRef = this.windowService.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;

    })
    .catch( error => console.log(error, 'Incorrect code entered?'));
  }




}
