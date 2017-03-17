import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
// import { MdIconModule } from '@angular2-material/icon';
import 'hammerjs';
import { routes } from './app.router';
import { RecaptchaModule } from 'ng2-recaptcha';

import { AppComponent } from './app.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TechnicalSkillComponent } from './technical-skill/technical-skill.component';
import { FormValidatorComponent } from './shared/form-validator/form-validator.component';


@NgModule({
  declarations: [
    AppComponent
    , WhoamiComponent, WorkExperienceComponent
    , EducationComponent, ContactComponent
    , HomeComponent, NavComponent, FooterComponent
    , WhoamiComponent, TechnicalSkillComponent
    , FormValidatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    // MdIconModule,
    routes,
    RecaptchaModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
