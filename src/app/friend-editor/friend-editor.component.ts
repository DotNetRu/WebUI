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
  private _friendId = '';
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
  public get friendId(): string {
    return this._friendId;
  }

  public set friendId(value: string) {
    this._friendId = value;
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
  }

  public toggle() {
    this.isNewFriend = !this.isNewFriend;

    if (this.isNewFriend) {
      this.friend.id = this.friendId;
      this.meetup.newFriends.push(this.friend);
    } else {
      const index = this.meetup.newFriends.findIndex(item => item.id === this._friendId);
      this.meetup.newFriends.splice(index, 1);
    }
  }

  private initIsNewFriend() {
    if (!this.meetup || this._friendId === '' || !this._friendIndex) {
      this.isNewFriend = false;
      return;
    }

    const existingFriend = this.meetup.newFriends.find(item => item.id === this._friendId);

    this.isNewFriend = existingFriend != null && existingFriend !== undefined;
  }
}
