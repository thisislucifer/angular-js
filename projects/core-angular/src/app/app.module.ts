//this is a typical class
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import { AppComponent } from './app.component';
import { CardComponent } from './card.component';


@NgModule({
    imports: [BrowserModule], //We mention all the things that we bring from core angular.
    declarations: [AppComponent,CardComponent], //Its is a place where we need to declare everything inside this module. (E.g if anything comes into this module it needs to register himself here)
    bootstrap: [AppComponent] //Whats is the first thing that we want to load-up . 
})
export class AppModule {}
