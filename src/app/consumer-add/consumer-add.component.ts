import { ActivatedRoute, Router, Params } from '@angular/router';
import { AppService } from './../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-add',
  templateUrl: './consumer-add.component.html',
  styleUrls: ['./consumer-add.component.css']
})
export class ConsumerAddComponent implements OnInit {

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getConsumer();
  }

  submitted: any;
  response: any;
  errorMessage: any;
  errorData: any;
  consumerID: any;
  editMode: any = false;
  editMessage: any;

  consumerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required]),
    contact_num: new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]),
    email: new FormControl('', [Validators.required, Validators.email]),
    meter_num: new FormControl('', [Validators.required, Validators.pattern("[0-9]+")]),
  });

  get f() {
    return this.consumerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.consumerForm.valid && this.submitted && !this.editMode) {
      this.appService.addConsumer(this.consumerForm.value).subscribe(
        res => {
          this.response = res;
          if (this.response.status == 'success') {
            this.submitted = false;
            this.editMode = false;
            this.router.navigate(['/consumer-list/']);
          }
        },
        error => {
          if (error.status === 422) {
            this.errorMessage = error.error.message;
            this.errorData = error.error.errors;
          }
        });
    }
    else if (this.consumerForm.valid && this.submitted && this.editMode) {
      this.appService.putConsumer(this.consumerID, this.consumerForm.value).subscribe(
        res => {
          this.response = res;
          if (this.response.status == 'success') {
            this.router.navigate(['/consumer/' + this.consumerID]);
          }
        },
        error => {
          if (error.status === 422) {
            this.errorMessage = error.error.message;
            this.errorData = error.error.errors;
          }
        });
    }
  }

  getConsumer() {
    this.route.params.subscribe((params: Params) => {
      if (params['consumerID']) {
        this.consumerID = params['consumerID'];
        this.editMode = true;
        this.appService.getConsumer(this.consumerID).subscribe(res => {
          this.response = res;
          if (this.response.status == 'success') {
            this.consumerForm.patchValue(this.response.data);
          } else if (this.response.status == 'fail') {
            this.editMessage = this.response.message;
          }

        });
      }
    });
  }
}
