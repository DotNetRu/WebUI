import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueEditorComponent } from './venue-editor.component';
import {AppModule} from "../app.module";
import {MeetupFactory} from "../models/meetupFactory";

describe('VenueEditorComponent', () => {
  let component: VenueEditorComponent;
  let fixture: ComponentFixture<VenueEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueEditorComponent);
    component = fixture.componentInstance;
    component.venue = MeetupFactory.createVenue();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
