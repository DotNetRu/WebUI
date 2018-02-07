import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdEditorComponent } from './id-editor.component';

describe('IdEditorComponent', () => {
  let component: IdEditorComponent;
  let fixture: ComponentFixture<IdEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
