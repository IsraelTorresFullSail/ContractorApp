import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WalkthroughListComponent } from './components/walkthrough-list/walkthrough-list.component';
import { PunchListComponent } from './components/punch-list/punch-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './components/home/home.component';

import { MaterialModule } from './material.module';

import { ReactiveFormsModule } from '@angular/forms';

// Firebase
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { AppRoutingModule } from './app-routing.module';
import { ReportsComponent } from './components/reports/reports.component';
import { IncidentsComponent } from './components/incidents/incidents.component';

@NgModule({
  declarations: [
    AppComponent,
    WalkthroughListComponent,
    PunchListComponent,
    LoginComponent,
    RegisterComponent,
    MainMenuComponent,
    HomeComponent,
    ReportsComponent,
    IncidentsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    // NgxAuthFirebaseUIModule,
    AppRoutingModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
