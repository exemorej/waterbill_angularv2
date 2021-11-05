import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disconnection-list',
  templateUrl: './disconnection-list.component.html',
  styleUrls: ['./disconnection-list.component.css']
})
export class DisconnectionListComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getDueBills();
  }

  response: any;
  consumers: any;
  message: any;

  getDueBills() {
    this.appService.getDueBills().subscribe(res => {
      this.response = res;
      if (this.response.status == 'no records') {
        this.message = this.response.message
      } else if (this.response.status == 'success') {
        this.consumers = this.response.data;
      }
    });
  }

}
