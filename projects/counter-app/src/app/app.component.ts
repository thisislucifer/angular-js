import { Component } from '@angular/core';
// This is the main class where we write the logic part, all the variable declaration of the component happens here...
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';

  count: number = 0;

  handleIncrease = () => {
    if (this.count==10) {
      this.count = this.count + 10;  
    }
    this.count = this.count + 1;
  }

  handleDecrease = () => {
    this.count = this.count - 1;
  }
  handleReset = () => {
    this.count =0;
  }
}
