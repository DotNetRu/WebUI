import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMeetup} from '../models/meetup';
import {InputType} from '../input-editor/input-editor.component';
import {IFriend} from '../models/friend';

@Component({
  selector: 'app-friend-editor',
  templateUrl: './friend-editor.component.html',
  styleUrls: ['./friend-editor.component.scss']
})
export class FriendEditorComponent  {

  private _meetup: IMeetup;
  private _friendIndex: number;

  public InputType = InputType;

  @Input()
  get friendIndex(): number {
    return this._friendIndex;
  }

  set friendIndex(value: number) {
    this._friendIndex = value;

    this.initIsNewFriend();
  }


  @Input()
  get meetup(): IMeetup {
    return this._meetup;
  }

  set meetup(value: IMeetup) {
    this._meetup = value;
    this.initIsNewFriend();
  }

  public isNewFriend = false;

  public friend: IFriend  = {
    id: '',
    description: '',
    name: '',
    url: ''
  };

  public toggle() {
    this.isNewFriend = !this.isNewFriend;

    if (this.isNewFriend) {
      this.friend.id = this.meetup.friendIds[this.friendIndex];
      this.meetup.newFriends.push(this.friend);
    } else {
      const index = this.meetup.newFriends.findIndex(item => item.id === this.meetup.friendIds[this.friendIndex]);
      this.meetup.newFriends.splice(index, 1);
    }
  }

  private initIsNewFriend() {
    if (!this._meetup || this._friendIndex === undefined) {
      this.isNewFriend = false;
      return;
    }

    const friendId = this.meetup.friendIds[this.friendIndex];
    const existingFriend = this.meetup.newFriends.find(item => item.id === friendId);

    this.isNewFriend = existingFriend != null && existingFriend !== undefined;

    if (this.isNewFriend) {
      this.friend = existingFriend;
    }
  }
}
