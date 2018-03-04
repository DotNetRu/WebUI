import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendEditorComponent } from './friend-editor.component';
import {AppModule} from "../app.module";
import {MeetupFactory} from "../models/meetupFactory";

describe('FriendEditorComponent', () => {
  let component: FriendEditorComponent;
  let fixture: ComponentFixture<FriendEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendEditorComponent);
    component = fixture.componentInstance;
    component.friend = MeetupFactory.createFriend();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
