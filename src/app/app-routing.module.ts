import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { WalkthroughListComponent } from './components/walkthrough-list/walkthrough-list.component';
import { PunchListComponent } from './components/punch-list/punch-list.component';
import { ReportsComponent } from './components/reports/reports.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'walkthrough', component: WalkthroughListComponent, canActivate: [AuthGuard] },
  { path: 'punch', component: PunchListComponent, canActivate: [AuthGuard] },
  { path: 'incidents', component: IncidentsComponent, canActivate: [AuthGuard] },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
