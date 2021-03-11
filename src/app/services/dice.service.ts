import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiceService {
  public diceRolls: BehaviorSubject<{playerOne: number; playerTwo: number;}> = new BehaviorSubject({
    playerOne: 0,
    playerTwo: 0,
  });

  public gamesWon: BehaviorSubject<{playerOne: number; playerTwo: number;}> = new BehaviorSubject({
    playerOne: 0,
    playerTwo: 0,
  });

  public playerOneWins: BehaviorSubject<boolean> = new BehaviorSubject(false)

  public playerTwoWins: BehaviorSubject<boolean> = new BehaviorSubject(false)

  private randNumber() {
    return Math.floor(Math.random() * 20 - 0 + 1) + 0;
  }

  private rollDice() {
    return this.randNumber();
  }

  public getPlayerRolls() {
    const playerRolls = {
      playerOne: this.rollDice(),
      playerTwo: this.rollDice(),
    };

    this.playerOneWins.next(false)
    this.playerTwoWins.next(false)

    this.diceRolls.next(playerRolls);

    if (playerRolls.playerOne > playerRolls.playerTwo) {
      this.gamesWon.next({
        playerOne: this.gamesWon.value.playerOne+= 1,
        playerTwo: this.gamesWon.value.playerTwo,
      });
      this.playerOneWins.next(true)
    } else if (playerRolls.playerOne < playerRolls.playerTwo) {
      this.gamesWon.next({
        playerOne: this.gamesWon.value.playerOne,
        playerTwo: this.gamesWon.value.playerTwo+= 1,
      });
      this.playerTwoWins.next(true)
    }
  }
}
