import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WalkthroughListComponent } from './components/walkthrough-list/walkthrough-list.component';
import { PunchListComponent } from './components/punch-list/punch-list.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'walkthrough', pathMatch: 'full'},
  { path: 'walkthrough', component: WalkthroughListComponent, canActivate: [AuthGuard] },
  { path: 'punch', component: PunchListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
