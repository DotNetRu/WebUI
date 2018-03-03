import {Component, Input } from '@angular/core';
import {ITalk} from '../models/talk';
import {IMeetup} from '../models/meetup';
import {ISpeaker} from "../models/speaker";
import {MeetupFactory} from "../models/meetupFactory";

@Component({
  selector: 'app-speaker-list-editor',
  templateUrl: './speaker-list-editor.component.html',
  styleUrls: ['./speaker-list-editor.component.scss']
})
export class SpeakerListEditorComponent {

  @Input()
  public talk: ITalk;

  constructor() { }

  addSpeaker() {
    this.talk.speakers.push(MeetupFactory.createSpeaker());
  }

  removeSpeker(speaker: ISpeaker) {
    const index = this.talk.speakers.findIndex(item => item === speaker);
    this.talk.speakers.splice(index, 1);
  }

  trackById(index: number, speakerId: string): number {
    return index;
  }
}
