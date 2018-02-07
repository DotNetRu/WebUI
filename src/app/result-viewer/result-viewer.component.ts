import {Component, Input} from '@angular/core';
import {IMeetup} from '../models/meetup';
import {IFile} from '../models/file';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.scss']
})
export class ResultViewerComponent {

  @Input()
  public meetup: IMeetup;

  public files: IFile[] = [];

  constructor() { }

  transform(meetup: IMeetup) {
    this.files = [
      {
        name: meetup.id + '.xml',
        folder: 'meetups',
        content: '<meetup></meetup>'
      }
    ];


    meetup.id
  }

}
