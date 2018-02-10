import {Component, Input} from '@angular/core';
import {IMeetup, MeetupFactory} from '../models/meetup';

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
  public meetup: IMeetup ;

  public addSession() {
    this.meetup.sessions.push({
      startTime: new Date(),
      endTime: new Date(),
      talk: {
        id: '',
        codeUrl: '',
        description: '',
        seeAlsoTalkIds: [{
          value: ''
        }],
        slidesUrl: '',
        title: '',
        videoUrl: '',
        speakerIds: ['']
      }
    });

    this.state = EditorState.Talk;
    this.selectedIndex = this.meetup.sessions.length - 1;
  }

  public clear() {
    if(window.confirm('Очистить встречу?')){
      this.meetup = Object.assign(this.meetup, MeetupFactory.createMeetup());
    }
  }
}

export enum EditorState {
  General,
  Talk,
  Speaker
}
