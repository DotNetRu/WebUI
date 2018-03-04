import { Component, DoCheck } from '@angular/core';
import {IMeetup} from './models/meetup';
import {MeetupFactory} from "./models/meetupFactory";

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
      this.meetup.sessions.forEach(session =>{
        session.startTime = new Date(session.startTime);
        session.endTime = new Date(session.endTime);
      });
    } else {
      this.meetup = MeetupFactory.createMeetup();
    }
  }

  public ngDoCheck(): void {
    localStorage.setItem(AppComponent._storageKey, JSON.stringify(this.meetup));
  }


}
