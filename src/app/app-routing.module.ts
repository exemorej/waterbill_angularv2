import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthRedirectGuard } from './auth-redirect.guard';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DisconnectionListComponent } from './disconnection-list/disconnection-list.component';
import { ConsumerListComponent } from './consumer-list/consumer-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConsumerBillAddComponent } from './consumer-bill-add/consumer-bill-add.component';
import { ConsumerBillComponent } from './consumer-bill/consumer-bill.component';
import { ConsumerAddComponent } from './consumer-add/consumer-add.component';
import { ConsumerComponent } from './consumer/consumer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'consumer-list', component: ConsumerListComponent, canActivate: [AuthGuard] },
  { path: 'consumer/add', component: ConsumerAddComponent, canActivate: [AuthGuard] },
  { path: 'consumer/:consumerID', component: ConsumerComponent, canActivate: [AuthGuard] },
  { path: 'consumer/:consumerID/edit', component: ConsumerAddComponent, canActivate: [AuthGuard] },
  { path: 'consumer/:consumerID/bill/add', component: ConsumerBillAddComponent, canActivate: [AuthGuard] },
  { path: 'consumer/:consumerID/bill/:billID', component: ConsumerBillComponent, canActivate: [AuthGuard] },
  { path: 'consumer/:consumerID/bill/:billID/edit', component: ConsumerBillAddComponent, canActivate: [AuthGuard] },
  { path: 'disconnection-list', component: DisconnectionListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthRedirectGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthRedirectGuard] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
