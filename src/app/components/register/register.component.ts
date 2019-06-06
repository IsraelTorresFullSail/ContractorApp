import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MustMatch } from './../../validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {}

  @ViewChild('userName') inputUserName: ElementRef;

  formRegister = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });

  ngOnInit() {
  }

  get f() {
    return this.formRegister.controls;
  }

  onAddUser() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formRegister.invalid) {
      return;
    }

    this.authService.registerUser(this.formRegister.get('email').value, this.formRegister.get('password').value)
    .then((res) => {
      this.authService.isAuth().subscribe( user => {
        if (user) {
          user.updateProfile({
            displayName: this.inputUserName.nativeElement.value
          }).then( () => {
            console.log('USER UPDATED', user);
            this.router.navigate(['walkthrough']);
          }).catch( (error) => console.log('error', error));
        }
      });
    }).catch( err => console.log('err', err.message));

  }

  onClick() {
    this.router.navigate(['login']);
  }
}
