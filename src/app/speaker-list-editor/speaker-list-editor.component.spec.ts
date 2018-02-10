import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerListEditorComponent } from './speaker-list-editor.component';

describe('SpeakerListEditorComponent', () => {
  let component: SpeakerListEditorComponent;
  let fixture: ComponentFixture<SpeakerListEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerListEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
