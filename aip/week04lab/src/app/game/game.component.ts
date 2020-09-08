import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  //declare status as a property of game
  status = "Please enter your guess";
  guess = "Initial guess";

  //need a parameter which is of type GameService
  //because it's public, when it will be created, it will be saved (rather than being lost)
  //'public' creates the reference for us
  constructor(public gameService: GameService) { }

  ngOnInit(): void {
  }

  check() {
    if (this.gameService.check(this.guess)) {
      this.status = this.guess + ' is correct';
    }
    else {
      this.status = this.guess + ' is incorrect';
    }
  }

}
