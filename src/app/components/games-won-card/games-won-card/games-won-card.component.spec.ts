import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesWonCardComponent } from './games-won-card.component';

describe('GamesWonCardComponent', () => {
  let component: GamesWonCardComponent;
  let fixture: ComponentFixture<GamesWonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesWonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesWonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
