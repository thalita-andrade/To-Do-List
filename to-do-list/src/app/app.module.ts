import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HomeComponent

    HeaderComponent,
    FormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
