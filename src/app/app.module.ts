import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { GamesWonCardComponent } from './components/games-won-card/games-won-card/games-won-card.component';
import { DiceRollComponent } from './components/dice-roll/dice-roll/dice-roll.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    GamesWonCardComponent,
    DiceRollComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
