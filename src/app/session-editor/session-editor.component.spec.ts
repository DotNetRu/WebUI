import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEditorComponent } from './session-editor.component';
import {AppModule} from "../app.module";
import {MeetupFactory} from "../models/meetupFactory";

describe('SessionEditorComponent', () => {
  let component: SessionEditorComponent;
  let fixture: ComponentFixture<SessionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionEditorComponent);
    component = fixture.componentInstance;
    component.session = MeetupFactory.createSession();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
