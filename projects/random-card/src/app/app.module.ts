import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// http module import
import { HttpClientModule } from "@angular/common/http"

// Toaster import
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Font Awesome
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome"


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
