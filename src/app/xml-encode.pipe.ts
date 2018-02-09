import { Pipe, PipeTransform } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'xmlEncode'
})
export class XmlEncodePipe implements PipeTransform {

  constructor(private _santizer: DomSanitizer) {
  }

  transform(value: string): string {

    return this._santizer.sanitize(SecurityContext.HTML, value);
  }

}
