import { AppService } from './../app.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

  token: any;
  message: any;

  onClick() {
    this.appService.logout().subscribe(res => {
      this.message = res;
      if (this.message.status == 'success') {
        localStorage.removeItem('token');
        this.router.navigate(['/login']).then(() => {
          window.location.reload();
        });
      }
    });
  }


}
