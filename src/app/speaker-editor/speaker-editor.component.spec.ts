import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerEditorComponent } from './speaker-editor.component';
import {AppModule} from "../app.module";
import {MeetupFactory} from "../models/meetupFactory";

describe('SpeakerEditorComponent', () => {
  let component: SpeakerEditorComponent;
  let fixture: ComponentFixture<SpeakerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerEditorComponent);
    component = fixture.componentInstance;
    component.speaker = MeetupFactory.createSpeaker();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
