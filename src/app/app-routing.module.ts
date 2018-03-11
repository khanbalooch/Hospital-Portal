import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutHospitalComponent } from './components/about-hospital/about-hospital.component';
import { ServicesComponent } from './components/services/services.component';
import { OurStaffComponent } from './components/our-staff/our-staff.component';
import { RevampingComponent } from './components/revamping/revamping.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ContactComponent } from './components/contact/contact.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { CareersComponent } from './components/careers/careers.component';
import { TendersComponent } from './components/downloads/tenders/tenders.component';
import { OtherDownloadsComponent } from './components/downloads/other-downloads/other-downloads.component';
import { MsdsComponent } from './components/msds/msds.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'abouthospital', component: AboutHospitalComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'ourstaff', component: OurStaffComponent},
  { path: 'downloads', component: DownloadsComponent},
  { path: 'revamping', component: RevampingComponent},
  { path: 'msds', component: MsdsComponent},
  // { path: 'messages', component: MessagesComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'tenders', component: TendersComponent},
  { path: 'otherdownloads', component: OtherDownloadsComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
