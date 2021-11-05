import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from './../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  submitted = false;
  response: any;
  message: any;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid && this.submitted) {
      this.appService.login(this.loginForm.value).subscribe(res => {
        this.response = res;
        if (this.response.status == 'fail') {
          this.message = this.response.message;
        } else if (this.response.status == 'success') {
          localStorage.setItem('token', this.response.data.token)
          this.router.navigate(['home']).then(() => {
            this.submitted = false;
            window.location.reload();
          });
        }
      });
    }
  }
}
