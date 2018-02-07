import { Component } from '@angular/core';
import {IMeetup} from './models/meetup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public state = 0;

  public meetup: IMeetup = {
    newVenue: null,
    sessions: [{
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
    }],
    venueId: '',
    newFriends: [],
    id: 'test',
    name: '',
    friendIds: [''],
    communityId: 'SpbDotNet',
    newSpeakers: [],
  };
}
