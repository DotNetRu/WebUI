import {Component, Input, OnInit} from '@angular/core';
import {IMeetup} from '../models/meetup';
import {InputType} from '../input-editor/input-editor.component';
import {IFriend} from "../models/friend";
import {MeetupFactory} from "../models/meetupFactory";

@Component({
  selector: 'app-general-editor',
  templateUrl: './general-editor.component.html',
  styleUrls: ['./general-editor.component.scss']
})
export class GeneralEditorComponent {

  public InputType = InputType;

  constructor() { }

  @Input()
  public meetup: IMeetup;

  addFriend() {
    this.meetup.friends.push(MeetupFactory.createFriend());
  }

  removeFriend(friend: IFriend) {
    const index = this.meetup.friends.findIndex(item => item === friend);
    this.meetup.friends.splice(index, 1);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
