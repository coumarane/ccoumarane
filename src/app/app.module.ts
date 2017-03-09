import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2/index';
//import { firebaseConfig } from '../environments/firebase.config';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { RouterModule, Routes } from '@angular/router';


import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    //redirectTo: '/',
    //pathMatch: 'full'
  },
  {
    path: 'profile', component: WhoamiComponent
  },
  {
    path: 'work-experience', component: WorkExperienceComponent
  },
  {
    path: 'education', component: EducationComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

const appRoutes: Routes = [
  {
    path: 'profile', component: WhoamiComponent
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent
<<<<<<< HEAD
    , WhoamiComponent, WorkExperienceComponent, EducationComponent, ContactComponent, HomeComponent, NavComponent, FooterComponent
=======
    , WhoamiComponent
>>>>>>> 4774ede40661aeb8582063c19184276fffa185ae
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
<<<<<<< HEAD
    //AngularFireModule.initializeApp(firebaseConfig),
=======
    AngularFireModule.initializeApp(firebaseConfig),
>>>>>>> 4774ede40661aeb8582063c19184276fffa185ae
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
