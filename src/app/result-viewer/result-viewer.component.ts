import {Component, Input, ElementRef} from '@angular/core';
import {IMeetup} from '../models/meetup';

@Component({
  selector: 'app-result-viewer',
  templateUrl: './result-viewer.component.html',
  styleUrls: ['./result-viewer.component.scss']
})
export class ResultViewerComponent {

  @Input()
  public meetup: IMeetup;

  constructor() { }

  public download(element: any, fileName: string) {
    const contentType = 'application/octet-stream';

    const content =  this.encodeUTF8(element.textContent);

    var a = document.createElement('a');
    var blob = new Blob([content], {'type': contentType});
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
  }

  private encodeUTF8(s: string) {
    var i = 0;
    var bytes = new Uint8Array(s.length * 4);
    for (var ci = 0; ci != s.length; ci++) {
      var c = s.charCodeAt(ci);
      if (c < 128) {
        bytes[i++] = c;
        continue;
      }
      if (c < 2048) {
        bytes[i++] = c >> 6 | 192;
      } else {
        if (c > 0xd7ff && c < 0xdc00) {
          if (++ci === s.length) throw 'UTF-8 encode: incomplete surrogate pair';
          const c2 = s.charCodeAt(ci);
          if (c2 < 0xdc00 || c2 > 0xdfff) throw 'UTF-8 encode: second char code 0x' + c2.toString(16) + ' at index ' + ci + ' in surrogate pair out of range';
          c = 0x10000 + ((c & 0x03ff) << 10) + (c2 & 0x03ff);
          bytes[i++] = c >> 18 | 240;
          bytes[i++] = c >> 12 & 63 | 128;
        } else { // c <= 0xffff
          bytes[i++] = c >> 12 | 224;
        }
        bytes[i++] = c >> 6 & 63 | 128;
      }
      bytes[i++] = c & 63 | 128;
    }
    return bytes.subarray(0, i);
  }

}
