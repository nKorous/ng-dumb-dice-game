import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {
  @Input() diceRoll: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
