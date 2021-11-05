import { AppService } from './../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consumer-bill-add',
  templateUrl: './consumer-bill-add.component.html',
  styleUrls: ['./consumer-bill-add.component.css']
})
export class ConsumerBillAddComponent implements OnInit {

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getConsumerIDbillID();
    this.getConsumer();
  }

  consumerID: any;
  billID: any;
  submitted: any = false;
  file: any = '';
  response: any;
  message: any;
  editMode = false;

  consumerBillForm = new FormGroup({
    amount: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
    paid: new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
    status: new FormControl('', [Validators.required]),
    period_start: new FormControl('', [Validators.required]),
    period_end: new FormControl('', [Validators.required]),
    due_date: new FormControl('', [Validators.required])
  });

  get f() {
    return this.consumerBillForm.controls;
  }

  getConsumerIDbillID() {
    this.route.params.subscribe(params => {
      if (params['consumerID']) {
        this.consumerID = params['consumerID'];
      }

      if (params['billID']) {
        this.editMode = true;
        this.billID = params['billID'];
        this.appService.getConsumerBill(this.consumerID, this.billID).subscribe(res => {
          this.response = res;
          if (this.response.status == 'fail') {
            this.message = this.response.message;
          } else if (this.response.status == 'success') {
            this.consumerBillForm.patchValue(this.response.data);
          }
        });
      }
    });
  }

  getConsumer() {
    this.appService.getConsumer(this.consumerID).subscribe(res => {
      this.response = res;
      if (this.response.status == 'fail') {
        this.message = this.response.message;
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.consumerBillForm.valid && this.submitted && !this.editMode) {
      this.appService.addConsumerBills(this.consumerID, this.consumerBillForm.value).subscribe(res => {
        this.response = res;
        if (this.response.status == 'success') {
          this.submitted = false;
          this.router.navigate(['/consumer/' + this.consumerID]);
        }
      });
    }

    if (this.consumerBillForm.valid && this.submitted && this.editMode) {
      this.appService.putConsumerBill(this.consumerID, this.billID, this.consumerBillForm.value).subscribe(res => {
        this.response = res;
        if (this.response.status == 'success') {
          this.editMode = false;
          this.router.navigate(['/consumer/' + this.consumerID]);
        }
      })
    }
  }

}
