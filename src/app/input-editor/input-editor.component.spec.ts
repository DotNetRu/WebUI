import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEditorComponent } from './input-editor.component';
import {AppModule} from "../app.module";

describe('InputEditorComponent', () => {
  let component: InputEditorComponent;
  let fixture: ComponentFixture<InputEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
