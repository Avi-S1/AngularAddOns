import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullTestComponent } from './full-test/full-test.component';
import { QstnCardComponent } from './qstn-card/qstn-card.component';
import { SetProfileComponent } from './set-profile/set-profile.component';
import { TestNavbarComponent } from './test-navbar/test-navbar.component';
import { BurgurMenuComponent } from './burgur-menu/burgur-menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FullTestComponent,
    QstnCardComponent,
    SetProfileComponent,
    TestNavbarComponent,
    BurgurMenuComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
