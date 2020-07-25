import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment-four';

  counters= [];

  startGame(counter){
      console.log(counter);
      this.counters.push(counter);
  }
}
