import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {

  }

  login() {
    this.errorMessage = '';
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .then((value) => {
      console.log(value)
    })
    .catch((err) => {
      console.log(err)
      this.errorMessage = err.message;
    })
  }

}
