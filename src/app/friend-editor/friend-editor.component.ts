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

  public InputType = InputType;

  @Input()
  public friend: IFriend ;

}
