import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService, private fb: FormBuilder) { }


  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.loginForm.get('email').value, this.loginForm.get('password').value)
    .then( (res) => {
      this.router.navigate(['home']);
    }).catch( err => console.log('err', err.message));
  }

  onLogout() {
    this.authService.logoutUser();
  }

  onClick() {
    this.router.navigate(['register']);
  }
}
