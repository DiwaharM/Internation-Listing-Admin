import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogIn } from './login.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LogInForm: FormGroup;
  loginValue: LogIn;
  loginFaild = false;
  pwdError = false;
  constructor(private fb: FormBuilder, private accountService: AccountService,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.LogInForm = this.fb.group({
      userName: [''],
      password: ['']
    });
  }
  login(LogInForm: FormGroup) {
    this.loginValue = new LogIn();
    this.loginValue.userName = LogInForm.controls.userName.value;
    this.loginValue.password = LogInForm.controls.password.value;
    this.accountService.Login(this.loginValue).subscribe(data => {
      if (data.length !== 0) {
        this.pwdError = true;
        this.router.navigate(['navside']);
      } else {
        this.loginFaild = true;
      }
    }, error => {
      this.pwdError = false;
      this.loginFaild = true;
      console.log(error);
    });
  }
}
