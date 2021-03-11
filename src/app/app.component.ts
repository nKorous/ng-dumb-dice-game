import { DiceService } from './services/dice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diceRolls: {playerOne: number; playerTwo: number}
  gamesWon: {playerOne: number; playerTwo: number}
  playerOneWins: boolean = false
  playerTwoWins: boolean = false

  constructor(
    private diceService: DiceService
  ){}

  ngOnInit() {
    this.diceService.diceRolls.subscribe(value => {
      this.diceRolls = value
    })

    this.diceService.gamesWon.subscribe(value => {
      console.log(value)
      this.gamesWon = value
    })

    this.diceService.playerOneWins.subscribe(value => {
      this.playerOneWins = value
    })

    this.diceService.playerTwoWins.subscribe(value => {
      this.playerTwoWins = value
    })
  }

  rollDice(){
    this.diceService.getPlayerRolls()
  }


}
