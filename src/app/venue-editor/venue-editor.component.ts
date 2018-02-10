import {Component, Input } from '@angular/core';
import {IMeetup} from '../models/meetup';
import {InputType} from '../input-editor/input-editor.component';
import {IVenue} from '../models/venue';

@Component({
  selector: 'app-venue-editor',
  templateUrl: './venue-editor.component.html',
  styleUrls: ['./venue-editor.component.scss']
})
export class VenueEditorComponent {
  private _newVenue: IVenue = {
    address: '',
    id: '',
    mapUrl: '',
    name: ''
  };

  public InputType = InputType;

  @Input()
  public meetup: IMeetup;

  public toggleVenue() {
    if (this.meetup.newVenue) {
      this._newVenue = this.meetup.newVenue;
      this.meetup.venueId = this.meetup.newVenue.id;
      this.meetup.newVenue = null;
    } else {
      this.meetup.newVenue = this._newVenue;
      this.meetup.newVenue.id = this.meetup.venueId;
    }
  }
}
