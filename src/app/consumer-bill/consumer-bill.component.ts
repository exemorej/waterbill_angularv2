import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-consumer-bill',
  templateUrl: './consumer-bill.component.html',
  styleUrls: ['./consumer-bill.component.css']
})
export class ConsumerBillComponent implements OnInit {

  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getConsumerIDBillID();
    this.getConsumerBill();
  }

  consumerID: any;
  billID: any;
  response: any;
  deleteResponse: any = '';
  message: any;
  bill: any = '';

  getConsumerIDBillID() {
    this.route.params.subscribe((params: Params) => {
      if (params['consumerID']) {
        this.consumerID = params['consumerID'];
      }

      if (params['billID']) {
        this.billID = params['billID'];
      }
    });
  }

  getConsumerBill() {
    this.appService.getConsumerBill(this.consumerID, this.billID).subscribe(res => {
      this.response = res;
      if (this.response.status == 'success') {
        this.bill = this.response.data;
      } else if (this.response.status == 'fail') {
        this.message = this.response.message;
      }
    });
  }

  onDelete() {
    this.appService.deleteConsumerBill(this.consumerID, this.billID).subscribe(res => {
      this.deleteResponse = res;
      if (this.response.status == 'success') {
        this.router.navigate(['/consumer/' + this.consumerID]);
      } else if (this.response.status == 'fail') {
        this.deleteResponse = this.response.message;
      }
    })
  }

}
