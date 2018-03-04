import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerListEditorComponent } from './speaker-list-editor.component';
import {AppModule} from "../app.module";
import {MeetupFactory} from "../models/meetupFactory";

describe('SpeakerListEditorComponent', () => {
  let component: SpeakerListEditorComponent;
  let fixture: ComponentFixture<SpeakerListEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerListEditorComponent);
    component = fixture.componentInstance;
    component.talk = MeetupFactory.createTalk();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
