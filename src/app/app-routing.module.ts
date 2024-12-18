import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClassesComponent } from './classes/classes.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { FaqComponent } from './faq/faq.component';
import { PolicyComponent } from './policy/policy.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent, title:"About - ReynoDance"},
  {path: 'classes', component: ClassesComponent, title:"Classes - ReynoDance"},
  {path: 'register', component: RegisterComponent, title:"Register - ReynoDance"},
  {path: 'sign-in', component: SignInComponent, title:"Sign-In - ReynoDance"},
  {path: 'dashboard', component: DashboardComponent, title:"Dashboard - ReynoDance"},
  {path: '', component: HomeComponent, title:"ReynoDance Academy"},
  {path: 'faq', component: FaqComponent, title:"FAQ - ReynoDance"},
  {path: 'policy', component: PolicyComponent, title:"Rules & Regulations - ReynoDance"},
  {path: 'schedule', component: ScheduleComponent, title:"Schedule - ReynoDance"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
