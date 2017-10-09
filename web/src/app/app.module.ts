import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SDKBrowserModule } from "./common/sdk/index";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule,
   MatButtonModule, MatDialogModule,MatInputModule,MatSelectModule,
  MatCardModule } from '@angular/material';
import { AddPhotoComponent } from './addPhoto/addPhoto.component';
import { TagInputModule,TagInputComponent } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUpload } from './fileupload/fileupload';
import { NgFileSelectDirective } from 'ngx-uploader';
import { PhotosComponent } from './Photos/Photos.component';
@NgModule({
  declarations: [
    AppComponent,
    AddPhotoComponent,
    FileUpload,
    NgFileSelectDirective,
    PhotosComponent
],
  imports: [
    BrowserModule,
    SDKBrowserModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    TagInputModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddPhotoComponent,TagInputComponent]
})
export class AppModule { }
