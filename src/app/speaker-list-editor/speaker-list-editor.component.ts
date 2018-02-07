import {Component, Input } from '@angular/core';
import {ITalk} from '../models/talk';
import {IMeetup} from '../models/meetup';

@Component({
  selector: 'app-speaker-list-editor',
  templateUrl: './speaker-list-editor.component.html',
  styleUrls: ['./speaker-list-editor.component.scss']
})
export class SpeakerListEditorComponent {

  @Input()
  public talk: ITalk;

  @Input()
  public meetup: IMeetup;

  constructor() { }

  addSpeaker() {
    this.talk.speakerIds.push('');
  }

  removeSpeker(index: number) {
    const spekerId = this.talk.speakerIds[index];
    this.talk.speakerIds.splice(index, 1);

    const newIndex = this.meetup.newSpeakers.findIndex(item => item.id === spekerId);
    if (newIndex >= 0) {
      this.meetup.newFriends.splice(newIndex, 1);
    }
  }

  trackById(index: number, speakerId: string): number {
    return index;
  }
}
