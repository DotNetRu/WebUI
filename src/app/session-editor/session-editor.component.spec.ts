import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionEditorComponent } from './session-editor.component';

describe('SessionEditorComponent', () => {
  let component: SessionEditorComponent;
  let fixture: ComponentFixture<SessionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
