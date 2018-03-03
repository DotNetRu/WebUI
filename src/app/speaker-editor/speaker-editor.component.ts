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

  public InputType = InputType;

  @Input()
  public speaker: ISpeaker;

  constructor() {
  }
}
