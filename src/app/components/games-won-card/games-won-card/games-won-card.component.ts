import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-won-card',
  templateUrl: './games-won-card.component.html',
  styleUrls: ['./games-won-card.component.css']
})
export class GamesWonCardComponent implements OnInit {
  @Input() gamesWon: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
