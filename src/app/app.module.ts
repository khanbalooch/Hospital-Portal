import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CountUpModule } from 'countup.js-angular2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CopyrightComponent } from './shared/components/copyright/copyright.component';
import { HomeComponent } from './components/home/home.component';
import { AboutHospitalComponent } from './components/about-hospital/about-hospital.component';
import { ServicesComponent } from './components/services/services.component';
import { OurStaffComponent } from './components/our-staff/our-staff.component';
import { RevampingComponent } from './components/revamping/revamping.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './/app-routing.module';
import { ImageSliderComponent } from './components/home/image-slider/image-slider.component';
import { WelcomeNoteComponent } from './components/home/welcome-note/welcome-note.component';
import { SuccessStatsComponent } from './components/home/success-stats/success-stats.component';
import { OurConsultantsComponent } from './components/home/our-consultants/our-consultants.component';
import { VerticalProgramsComponent } from './components/home/vertical-programs/vertical-programs.component';
import { AvatarCardComponent } from './shared/components/avatar-card/avatar-card.component';
import { FlippingCardComponent } from './shared/components/flipping-card/flipping-card.component';
import { CounterComponent } from './shared/components/counter/counter.component';
import { VmvStatementComponent } from './components/home/vmv-statement/vmv-statement.component';
import { MessageComponent } from './shared/components/message/message.component';
import { NewsComponent } from './shared/components/news/news.component';
import { ScrollTopComponent } from './shared/components/scroll-top/scroll-top.component';
import { GmapComponent } from './shared/components/gmap/gmap.component';
import { SimpleCardComponent } from './shared/components/simple-card/simple-card.component';
import { ContactItemsComponent } from './components/contact/contact-items/contact-items.component';
import { MessageFormComponent } from './components/contact/message-form/message-form.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { CircleCardComponent } from './shared/components/circle-card/circle-card.component';
import { HrTabComponent } from './shared/components/hr-tab/hr-tab.component';
import { ProfileCardComponent } from './shared/components/profile-card/profile-card.component';
import { InfoBarComponent } from './shared/components/header/info-bar/info-bar.component';
import { NameLogoComponent } from './shared/components/header/name-logo/name-logo.component';
import { NavBarComponent } from './shared/components/header/nav-bar/nav-bar.component';
import { TimingsComponent } from './components/home/timings/timings.component';
import { CareersComponent } from './components/careers/careers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    HomeComponent,
    AboutHospitalComponent,
    ServicesComponent,
    OurStaffComponent,
    RevampingComponent,
    MessagesComponent,
    ContactComponent,
    ImageSliderComponent,
    WelcomeNoteComponent,
    SuccessStatsComponent,
    OurConsultantsComponent,
    VerticalProgramsComponent,
    AvatarCardComponent,
    FlippingCardComponent,
    CounterComponent,
    VmvStatementComponent,
    MessageComponent,
    NewsComponent,
    ScrollTopComponent,
    GmapComponent,
    SimpleCardComponent,
    ContactItemsComponent,
    MessageFormComponent,
    DownloadsComponent,
    CircleCardComponent,
    HrTabComponent,
    ProfileCardComponent,
    InfoBarComponent,
    NameLogoComponent,
    NavBarComponent,
    TimingsComponent,
    CareersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeV6qfvZi5y5_kiVGHqCrdT91bi4va_IE'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
