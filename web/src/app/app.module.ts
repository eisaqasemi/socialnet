import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SDKBrowserModule } from "./common/sdk/index";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { AddPhotoComponent } from './addPhoto/addPhoto.component';
import { TagInputModule,TagInputComponent } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { FileUpload } from './fileupload/fileupload';
import { NgFileSelectDirective } from 'ngx-uploader';
@NgModule({
  declarations: [
    AppComponent,
    AddPhotoComponent,
    FileUpload,
    NgFileSelectDirective
  ],
  imports: [
    BrowserModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    TagInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddPhotoComponent,TagInputComponent]
})
export class AppModule { }
