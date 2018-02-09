import {Component, Input, ElementRef} from '@angular/core';
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

  public download(element: any, fileName: string) {
    const contentType = 'application/octet-stream';
    console.log(element);
    const content =  element.textContent;
    var a = document.createElement('a');
    var blob = new Blob([content], {'type': contentType});
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
  }

}
