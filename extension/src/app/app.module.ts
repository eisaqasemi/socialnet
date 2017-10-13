import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { SDKBrowserModule } from "./common/sdk/index";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule,
   MatButtonModule, MatDialogModule,MatInputModule,MatSelectModule,
  MatCardModule,MatToolbarModule, MatChipsModule, MatExpansionModule,
  MatIconModule,MatSidenavModule, MatListModule,MatMenuModule } from '@angular/material';
import { AddPhotoComponent } from './addPhoto/addPhoto.component';
import { TagInputModule,TagInputComponent } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUpload } from './fileupload/fileupload';
import { NgUploaderModule } from 'ngx-uploader';
import { PhotosComponent } from './Photos/Photos.component';
import { AlbumsComponent } from './Albums/Albums.component';
import { AlbumComponent } from './Albums/album/album.component';
import { AlbumListComponent } from './Albums/album-list/album-list.component';
import { CreateAlbumComponent } from './Albums/create-album/create-album.component'
import { PhotoComponent } from './Photos/photo/photo.component'
import { LayoutComponent } from './layout/layout/layout.component';
import { SidebarComponent } from  './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component'

const routes: Routes = [
  // { path:"albums" , component:AlbumListComponent },
  // { path:"photos" , component:PhotosComponent },
  // { path:"albums/:id" , component:AlbumComponent },
  // { path:"" ,redirectTo:"photos",pathMatch:"full"}
]

@NgModule({
  declarations: [
    AppComponent,
    AddPhotoComponent,
    FileUpload,
    PhotosComponent,
    AlbumsComponent,
    AlbumComponent,
    AlbumListComponent,
    CreateAlbumComponent,
    PhotoComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent
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
    MatIconModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    NgUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddPhotoComponent,TagInputComponent,CreateAlbumComponent]
})
export class AppModule { }
