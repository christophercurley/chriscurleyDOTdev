import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialMediaLinksComponent } from './components/social-media-links/social-media-links.component';
import { IntroComponent } from './components/intro/intro.component';
import { PortraitComponent } from './components/portrait/portrait.component';
import { ProjectCardsComponent } from './components/project-cards/project-cards.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SocialMediaLinksComponent,
    IntroComponent,
    PortraitComponent,
    ProjectCardsComponent,
    ProjectCardComponent,
    CalculatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
