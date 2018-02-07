import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEditorComponent } from './general-editor.component';

describe('GeneralEditorComponent', () => {
  let component: GeneralEditorComponent;
  let fixture: ComponentFixture<GeneralEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
