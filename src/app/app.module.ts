import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaradComponent } from './marad/marad.component';
import {FormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    MaradComponent,
    TestComponent,
    NotfoundComponent,
    NavComponent,
    ContactComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
