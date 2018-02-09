import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { GeneralEditorComponent } from './general-editor/general-editor.component';
import { InputEditorComponent } from './input-editor/input-editor.component';
import { VenueEditorComponent } from './venue-editor/venue-editor.component';
import { IdEditorComponent } from './id-editor/id-editor.component';
import { FriendEditorComponent } from './friend-editor/friend-editor.component';
import { SessionEditorComponent } from './session-editor/session-editor.component';
import { SpeakerEditorComponent } from './speaker-editor/speaker-editor.component';
import { SpeakerListEditorComponent } from './speaker-list-editor/speaker-list-editor.component';
import { ResultViewerComponent } from './result-viewer/result-viewer.component';
import { XmlEncodePipe } from './xml-encode.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    GeneralEditorComponent,
    InputEditorComponent,
    VenueEditorComponent,
    IdEditorComponent,
    FriendEditorComponent,
    SessionEditorComponent,
    SpeakerEditorComponent,
    SpeakerListEditorComponent,
    ResultViewerComponent,
    XmlEncodePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    NgbDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
