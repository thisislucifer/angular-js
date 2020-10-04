import { Component } from '@angular/core';
import arrayWords from '../utils/words'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = ''
  limit = 10;
  
  handleSliderChange(newLimit : number){
    this.limit = newLimit; //We have updated the value of limit from 10 to new-value;
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
}
