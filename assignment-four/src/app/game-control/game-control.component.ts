import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStarted = new EventEmitter<number>();

  gameCounter:number = 1;

  timer;

  constructor() { }

  ngOnInit(): void {
  }

  startGame()
  {
    this.timer= setInterval(()=>{this.gameStarted.emit(this.gameCounter++)}, 1000) ;
   
  }

  stopGame(){
      if(this.timer)
      {
        clearInterval(this.timer);
      }
  }

}
