import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEditorComponent } from './general-editor.component';
import {AppModule} from "../app.module";
import {MeetupFactory} from "../models/meetupFactory";

describe('GeneralEditorComponent', () => {
  let component: GeneralEditorComponent;
  let fixture: ComponentFixture<GeneralEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralEditorComponent);
    component = fixture.componentInstance;
    component.meetup = MeetupFactory.createMeetup();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
