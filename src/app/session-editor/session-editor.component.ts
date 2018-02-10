import {Component, Input} from '@angular/core';
import {ISession} from '../models/session';
import {InputType} from '../input-editor/input-editor.component';
import {ISeeAlsoId} from '../models/seeAlsoId';

@Component({
  selector: 'app-session-editor',
  templateUrl: './session-editor.component.html',
  styleUrls: ['./session-editor.component.scss']
})
export class SessionEditorComponent  {

  public InputType = InputType;

  @Input()
  public session: ISession;


  removeSeeAlso(seeAlso: ISeeAlsoId) {
    const index = this.session.talk.seeAlsoTalkIds.findIndex(item => item === seeAlso);
    this.session.talk.seeAlsoTalkIds.splice(index, 1);
  }

  addSeeAlso() {
    this.session.talk.seeAlsoTalkIds.push({
      value: ''
    });
  }

  setDates(dateStr: string) {
    var date = new Date(dateStr);
    this.session.startTime.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
  }

  setTimeFor(dateTime: Date, timeStr: string) {
    const time = new Date(timeStr);
    dateTime.setHours(time.getHours(), time.getMinutes(), 0);
  }
}
