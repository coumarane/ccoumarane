import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TechnicalSkillComponent } from './technical-skill/technical-skill.component';


@NgModule({
  declarations: [
    AppComponent
    , WhoamiComponent, WorkExperienceComponent, EducationComponent, ContactComponent, HomeComponent, NavComponent, FooterComponent
    , WhoamiComponent, TechnicalSkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
