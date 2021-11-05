import { Router } from '@angular/router';
import { AppService } from './../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  submitted = false;
  matched = false;
  response: any;
  errorData: any;

  registerForm = new FormGroup({
    'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(4)]),
    'password1': new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.value.password == this.registerForm.value.password1) {
      this.matched = true;
    } else {
      this.matched = false;
    }

    if (this.registerForm.valid && this.submitted && this.matched) {
      this.appService.register(this.registerForm.value).subscribe(res => {
        this.response = res;
        if (this.response.status == 'success') {
          localStorage.setItem('token', this.response.data.token)
          this.matched = false;
          this.submitted = false;
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        }
      }, error => {
        if (error.status === 422) {
          this.errorData = error.error.errors;
        }
      });
    }
  }

}
