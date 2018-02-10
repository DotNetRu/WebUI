import { Component, DoCheck, SimpleChanges } from '@angular/core';
import {IMeetup, MeetupFactory} from './models/meetup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  DoCheck {
  private static _storageKey = 'meetup';

  public state = 0;

  public meetup: IMeetup;

  constructor() {
    const stored = localStorage.getItem(AppComponent._storageKey);
    if (stored) {
      this.meetup = Object.assign(MeetupFactory.createMeetup(), JSON.parse(stored));
    }
    else {
      this.meetup = MeetupFactory.createMeetup();
    }
  }

  public ngDoCheck(): void {
    localStorage.setItem(AppComponent._storageKey, JSON.stringify(this.meetup));
  }


}
