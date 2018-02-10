import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendEditorComponent } from './friend-editor.component';

describe('FriendEditorComponent', () => {
  let component: FriendEditorComponent;
  let fixture: ComponentFixture<FriendEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
