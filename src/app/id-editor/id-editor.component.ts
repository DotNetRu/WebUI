import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-id-editor',
  templateUrl: './id-editor.component.html',
  styleUrls: ['./id-editor.component.scss']
})
export class IdEditorComponent {
  private static _id = 0;

  @Input()
  public id = '';

  @Input()
  public label = '';

  @Input()
  public value: any = '';

  @Input()
  public add = false;

  @Input()
  public buttonTitle = '';

  @Output()
  public toggle = new EventEmitter();

  @Output()
  valueChange = new EventEmitter<any>();

  constructor() {
    this.id = 'idEditor' + IdEditorComponent._id++;
  }
}
