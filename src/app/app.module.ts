import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { DisconnectionListComponent } from './disconnection-list/disconnection-list.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ConsumerAddComponent } from './consumer-add/consumer-add.component';
import { ConsumerBillComponent } from './consumer-bill/consumer-bill.component';
import { ConsumerBillAddComponent } from './consumer-bill-add/consumer-bill-add.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ConsumerListComponent,
    DisconnectionListComponent,
    LoginComponent,
    RegisterComponent,
    ConsumerComponent,
    ConsumerAddComponent,
    ConsumerBillComponent,
    ConsumerBillAddComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
