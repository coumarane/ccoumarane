import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WhoamiComponent } from './whoami/whoami.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { TechnicalSkillComponent } from './technical-skill/technical-skill.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, //, redirectTo: '/', pathMatch: 'full'
  { path: 'profile', component: WhoamiComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'technical-skills', component: TechnicalSkillComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);