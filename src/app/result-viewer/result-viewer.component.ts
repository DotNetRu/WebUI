import {Component, Input, ElementRef} from '@angular/core';
import {IMeetup} from '../models/meetup';

import * as moment from 'moment-timezone';
import {Community} from "../models/community";

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

    const content =  this.encodeUTF8BomCrlf(element.textContent);

    var a = document.createElement('a');
    var blob = new Blob([content], {'type': contentType});
    a.href = window.URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
  }

  public toUtc(date: Date): string {
    let localDate = moment(date);
    if (this.meetup.communityId) {
      const community = Community.All.find(item => item.id === this.meetup.communityId);
      localDate = moment.tz(date, community.timeZone);;
    }

    const utcDate = localDate.tz('UTC');
    return utcDate.format('YYYY-MM-DDTHH:mm:ss');
  }

  private encodeUTF8BomCrlf(s: string) {
    var i = 3;
    var bytes = new Uint8Array(s.length * 4);

    bytes[0] = 0xEF;
    bytes[1] = 0xBB;
    bytes[2] = 0xBF;

    for (var ci = 0; ci != s.length; ci++) {
      var c = s.charCodeAt(ci);
      if (c < 128) {
        if (c === 0x0A && ci !== 0 && s.charCodeAt(ci - 1) !== 0x0D) {
          bytes[i++] = 0x0D;
        }
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
