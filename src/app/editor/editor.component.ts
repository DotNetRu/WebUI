import {Component, Input} from '@angular/core';
import {IMeetup} from '../models/meetup';
import {MeetupFactory} from "../models/meetupFactory";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  public EditorState = EditorState;

  public state: EditorState = EditorState.General;
  public selectedIndex = 0;

  @Input()
  public meetup: IMeetup;

  public addSession() {
    const previousEndDate = this.meetup.sessions[this.meetup.sessions.length - 1].endTime;

    this.meetup.sessions.push(MeetupFactory.createSession(previousEndDate));

    this.state = EditorState.Talk;
    this.selectedIndex = this.meetup.sessions.length - 1;
  }

  public clear() {
    if(window.confirm('Очистить встречу?')){
      this.meetup = Object.assign(this.meetup, MeetupFactory.createMeetup());
      this.state = EditorState.General;
    }
  }
}

export enum EditorState {
  General,
  Talk
}
