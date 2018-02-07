import {Component, Input } from '@angular/core';
import {IMeetup} from '../models/meetup';
import {ITalk} from '../models/talk';
import {ISpeaker} from '../models/speaker';
import {InputType} from '../input-editor/input-editor.component';

@Component({
  selector: 'app-speaker-editor',
  templateUrl: './speaker-editor.component.html',
  styleUrls: ['./speaker-editor.component.scss']
})
export class SpeakerEditorComponent {

  private _meetup: IMeetup;
  private _talk: ITalk;
  private _speakerIndex: number;

  public InputType = InputType;
  public isNewSpeaker = false;
  public speaker: ISpeaker = {
    blogUrl: '',
    companyName: '',
    companyUrl: '',
    contactsUrl: '',
    description: '',
    habrUrl: '',
    id: '',
    twitterUrl: '',
    name: ''
  };

  @Input()
  get speakerIndex(): number {
    return this._speakerIndex;
  }

  set speakerIndex(value: number) {
    this._speakerIndex = value;
    this.initIsNew();
  }

  @Input()
  get talk(): ITalk {
    return this._talk;
  }

  set talk(value: ITalk) {
    this._talk = value;
    this.initIsNew();
  }

  @Input()
  get meetup(): IMeetup {
    return this._meetup;
  }

  set meetup(value: IMeetup) {
    this._meetup = value;
    this.initIsNew();
  }

  constructor() {
  }

  public toggle() {
    this.isNewSpeaker = !this.isNewSpeaker;

    if (this.isNewSpeaker) {
      this.speaker.id = this.talk.speakerIds[this.speakerIndex];
      this.meetup.newSpeakers.push(this.speaker);
    } else {
      const speakerId = this.talk.speakerIds[this.speakerIndex];
      const index = this.meetup.newSpeakers.findIndex(item => item.id === speakerId);
      this.meetup.newSpeakers.splice(index, 1);
    }
  }

  private initIsNew() {
    if (!this._talk || !this._meetup) {
      return;
    }

    if (!this._speakerIndex && this._speakerIndex !== 0) {
      return;
    }

    const speakerId = this._talk.speakerIds[this._speakerIndex];

    const existingFriend = this._meetup.newSpeakers.find(item => item.id === speakerId);

    this.isNewSpeaker = existingFriend != null && existingFriend !== undefined;
  }
}
