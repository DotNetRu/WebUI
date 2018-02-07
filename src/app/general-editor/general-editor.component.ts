import {Component, Input, OnInit} from '@angular/core';
import {IMeetup} from '../models/meetup';
import {InputType} from '../input-editor/input-editor.component';

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
    this.meetup.friendIds.push('');
  }

  removeFriend(friendIndex: number) {
    const friendId = this.meetup.friendIds[friendIndex];
    this.meetup.friendIds.splice(friendIndex, 1);

    const newFriendIndex = this.meetup.newFriends.findIndex(item => item.id === friendId);
    if (newFriendIndex) {
      this.meetup.newFriends.splice(newFriendIndex, 1);
    }
  }

  trackByIndex(index: number): number {
    return index;
  }
}
