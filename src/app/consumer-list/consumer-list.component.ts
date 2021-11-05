import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.css']
})
export class ConsumerListComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getConsumerList();
  }

  response: any;
  consumers: any;
  message: any;

  getConsumerList() {
    this.appService.getConsumerList().subscribe(res => {
      this.response = res;
      if (this.response.status == 'success') {
        this.consumers = this.response.data;
      } else if (this.response.status == 'no records') {
        this.message = this.response.message;
      }
    });
  }
}
