import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) { }

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });

  url = 'http://127.0.0.1:8000/api'


  login(data: any) {
    return this.http.post(this.url + '/login', data);
  }

  register(data: any) {
    return this.http.post(this.url + '/register', data, { headers: this.header });
  }

  logout() {
    return this.http.get(this.url + '/logout', { headers: this.header });
  }

  getConsumerList() {
    return this.http.get(this.url + '/consumers', { headers: this.header });
  }

  addConsumer(data: any) {
    return this.http.post(this.url + '/consumers', data, { headers: this.header });
  }

  getConsumer(consumerID: any) {
    return this.http.get(this.url + '/consumers/' + consumerID, { headers: this.header });
  }

  putConsumer(consumerID: any, data: any) {
    return this.http.put(this.url + '/consumers/' + consumerID, data, { headers: this.header });
  }

  deleteConsumer(consumerID: any) {
    return this.http.delete(this.url + '/consumers/' + consumerID, { headers: this.header });
  }

  getConsumerBills(consumerID: any) {
    return this.http.get(this.url + '/consumers/' + consumerID + '/bills', { headers: this.header });
  }

  addConsumerBills(consumerID: any, data: any) {
    return this.http.post(this.url + '/consumers/' + consumerID + '/bills', data, { headers: this.header });
  }

  postImage(data: any) {
    return this.http.post(this.url + '/image', data, { headers: this.header });
  }

  getConsumerBill(consumerID: any, billID: any) {
    return this.http.get(this.url + '/consumers/' + consumerID + '/bills/' + billID, { headers: this.header });
  }

  viewConsumerBill(consumerID: any, billID: any) {
    return this.http.get(this.url + '/consumers/' + consumerID + '/bills/' + billID, { headers: this.header });
  }

  putConsumerBill(consumerID: any, billID: any, data: any) {
    return this.http.put(this.url + '/consumers/' + consumerID + '/bills/' + billID, data, { headers: this.header });
  }

  deleteConsumerBill(consumerID: any, billID: any) {
    return this.http.delete(this.url + '/consumers/' + consumerID + '/bills/' + billID, { headers: this.header });
  }

  getDueBills() {
    return this.http.get(this.url + '/dues', { headers: this.header });
  }

}
