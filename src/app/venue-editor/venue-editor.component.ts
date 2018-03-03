import {Component, Input } from '@angular/core';
import {InputType} from '../input-editor/input-editor.component';
import {IVenue} from '../models/venue';

@Component({
  selector: 'app-venue-editor',
  templateUrl: './venue-editor.component.html',
  styleUrls: ['./venue-editor.component.scss']
})
export class VenueEditorComponent {

  public InputType = InputType;

  @Input()
  public venue: IVenue;
}
