import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  //declare status as a property of game
  guessHistory = [];

  constructor() { }

  check(guess: string) {
    if (guess !== 'Angular') {
      this.guessHistory.push(guess);
      return false;
    }
    else {
      return true;
    }
  }
}
