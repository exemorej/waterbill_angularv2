import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['consumerID']) {
        this.consumerID = params['consumerID'];
      }
    });

    this.getConsumer();
    this.getConsumerBills();
  }

  consumerID: any;
  consumer: any = '';
  consumerBills: any;
  response: any;
  response1: any;
  message: any;
  errorMessage: any;

  getConsumer() {
    this.appService.getConsumer(this.consumerID).subscribe(res => {
      this.response = res;
      if (this.response.status == 'success') {
        this.consumer = this.response.data;
      } else if (this.response.status == 'fail') {
        this.message = this.response.message;
      }
    });
  }

  getConsumerBills() {
    this.appService.getConsumerBills(this.consumerID).subscribe(res => {
      this.response1 = res;
      if (this.response1.status == 'success') {
        this.consumerBills = this.response1.data;
      }
    });
  }

  onDelete() {
    this.appService.deleteConsumer(this.consumerID).subscribe(res => {
      this.response = res;
      if (this.response.status == 'success') {
        this.router.navigate(['/consumer-list']);
      } else if (this.response.status == 'fail') {
        this.errorMessage = this.response.message;
      }
    });
  }

}
