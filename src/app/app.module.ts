import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { WelcomePageComponent } from "./pages/welcome-page/welcome-page.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BannerComponent } from "./components/banner/banner.component";
import { WhatBitcoinComponent } from "./components/what-bitcoin/what-bitcoin.component";
import { OurFeaturesComponent } from "./components/our-features/our-features.component";
import { GetStartBitcoinComponent } from "./components/get-start-bitcoin/get-start-bitcoin.component";
import { SubscribeComponent } from "./components/subscribe/subscribe.component";
import { LatestNewsComponent } from "./components/latest-news/latest-news.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { OurTeamComponent } from "./components/our-team/our-team.component";
import { AuthPageComponent } from "./pages/auth-page/auth-page.component";
import { LatestService } from "../app/components/latest-news/latest.service";
import { PopcornComponent } from "./components/popcorn/popcorn.component";
import { PopcornService } from "./components/popcorn/popcorn.service";
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavBarComponent,
    BannerComponent,
    WhatBitcoinComponent,
    OurFeaturesComponent,
    GetStartBitcoinComponent,
    SubscribeComponent,
    LatestNewsComponent,
    FooterComponent,
    TestimonialsComponent,
    OurTeamComponent,
    AuthPageComponent,
    PopcornComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule
  ],
  providers: [LatestService, PopcornService],
  bootstrap: [AppComponent]
})
export class AppModule {}
