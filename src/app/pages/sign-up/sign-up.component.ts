import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user';
import { CrudService } from 'src/app/services/crud.service';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private auth: AngularFireAuth,
    private state: ProviderService,
    private crud: CrudService
  ) {

  }

  ngOnInit(): void {

  }

  createUser() {
    this.errorMessage = '';
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then((value) => {
      let newUser = new User();
      newUser.id = value.user.uid;
      newUser.email = this.email;
      newUser.username = this.username;
      this.crud.createUser(newUser)
      .then((userDidCreated) => {
        if (userDidCreated) {
          this.state.app.activeUser = newUser;
        }
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
      this.errorMessage = err.message;
    })
  }

}
