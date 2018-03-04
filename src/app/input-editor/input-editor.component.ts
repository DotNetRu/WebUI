import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.scss']
})
export class InputEditorComponent  {

  private static _id = 0;
  private _type: InputType = InputType.Text;

  public InputType = InputType;
  public id: string;
  public pattern = '';

  @Input()
  public get type(): InputType {
    return this._type;
  }
  public set type(value: InputType) {
    this._type = value;

    if (this._type === InputType.Url) {
      this.pattern = '^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\\\?([^#]*))?(#(.*))?';
    }
  }

  @Input()
  public value: any = '';

  @Input()
  public label = '';

  @Input()
  public required = true;

  @Output()
  valueChange = new EventEmitter<any>();

  constructor() {
    this.id = 'ctrl' + InputEditorComponent._id++;
  }
}

export enum InputType {
  Text,
  TextArea,
  Url
}
