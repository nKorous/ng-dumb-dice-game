import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  @Input() headerText: string;
  @Input() diceRoll: number;
  @Input() gamesWon: number;

}
