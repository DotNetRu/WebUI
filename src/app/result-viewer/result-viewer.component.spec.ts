import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultViewerComponent } from './result-viewer.component';
import {AppModule} from "../app.module";
import {MeetupFactory} from "../models/meetupFactory";

describe('ResultViewerComponent', () => {
  let component: ResultViewerComponent;
  let fixture: ComponentFixture<ResultViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultViewerComponent);
    component = fixture.componentInstance;
    component.meetup = MeetupFactory.createMeetup();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
