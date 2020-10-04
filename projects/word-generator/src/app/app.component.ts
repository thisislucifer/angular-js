import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountries from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  countries = ''
  words = ''
  limit = 1;
  
  handleSliderChange(newLimit : number){
    this.limit = newLimit; //We have updated the value of limit from 10 to new-value;
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(' ');
    this.countries = '';
  }

  generate_random_countries(){
    this.countries = arrayCountries.slice(0, Math.floor((Math.random() * 20) + 1)).join(' ');
    this.words='';
  }
}
