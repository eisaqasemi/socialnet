import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { SDKBrowserModule } from "./common/sdk/index";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule,
   MatButtonModule, MatDialogModule,MatInputModule,MatSelectModule,
  MatCardModule,MatToolbarModule, MatChipsModule, MatExpansionModule } from '@angular/material';
import { AddPhotoComponent } from './addPhoto/addPhoto.component';
import { TagInputModule,TagInputComponent } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUpload } from './fileupload/fileupload';
import { NgFileSelectDirective } from 'ngx-uploader';
import { PhotosComponent } from './Photos/Photos.component';
import { AlbumsComponent } from './Albums/Albums.component';
import { AlbumComponent } from './Albums/album/album.component';
import { AlbumListComponent } from './Albums/album-list/album-list.component';
import { CreateAlbumComponent } from './Albums/create-album/create-album.component'

const routes: Routes = [
  { path:"albums" , component:AlbumListComponent },
  { path:"albums/:name" , component:AlbumComponent }
]



@NgModule({
  declarations: [
    AppComponent,
    AddPhotoComponent,
    FileUpload,
    NgFileSelectDirective,
    PhotosComponent,
    AlbumsComponent,
    AlbumComponent,
    AlbumListComponent,
    CreateAlbumComponent
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
    MatCardModule,
    MatToolbarModule,
    MatChipsModule,
    MatExpansionModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddPhotoComponent,TagInputComponent,CreateAlbumComponent]
})
export class AppModule { }
