import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { WalkthroughListComponent } from './components/walkthrough-list/walkthrough-list.component';
import { PunchListComponent } from './components/punch-list/punch-list.component';
import { ReportsComponent } from './components/reports/reports.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'walkthrough', component: WalkthroughListComponent },
  { path: 'punch', component: PunchListComponent },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
