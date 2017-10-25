var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SDKBrowserModule } from "./common/sdk/index";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule, MatCardModule, MatToolbarModule, MatChipsModule, MatExpansionModule, MatIconModule, MatSidenavModule, MatListModule, MatMenuModule, MatGridListModule } from '@angular/material';
import { AddPhotoComponent } from './addPhoto/addPhoto.component';
import { TagInputModule, TagInputComponent } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUpload } from './fileupload/fileupload';
import { NgUploaderModule } from 'ngx-uploader';
import { PhotosComponent } from './Photos/Photos.component';
import { AlbumsComponent } from './Albums/Albums.component';
import { AlbumComponent } from './Albums/album/album.component';
import { AlbumListComponent } from './Albums/album-list/album-list.component';
import { CreateAlbumComponent } from './Albums/create-album/create-album.component';
import { PhotoComponent } from './Photos/photo/photo.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Not_foundComponent } from './not_found/not_found.component';
import { AuthenticationGuardService } from './AuthenticationGuard.service';
import { TokenService } from './token.service';
import { FriendsComponent } from './friends/friends.component';
import { MessagesComponent } from './messages/messages.component';
import { DirectComponent } from './direct/direct.component';
import { TagsComponent } from './tags/tags.component';
var routes = [
    {
        component: LayoutComponent,
        path: "",
        canActivate: [AuthenticationGuardService],
        children: [
            { path: "albums", component: AlbumListComponent },
            { path: "photos", component: PhotosComponent },
            { path: "tags/:id", component: TagsComponent },
            { path: "messages", component: MessagesComponent },
            { path: "friends", component: FriendsComponent },
            { path: "albums/:id", component: AlbumComponent },
            { path: "", redirectTo: "photos", pathMatch: "full" }
        ]
    },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            HeaderComponent,
            LoginComponent,
            SignupComponent,
            Not_foundComponent,
            FriendsComponent,
            MessagesComponent,
            DirectComponent,
            TagsComponent
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
            MatGridListModule,
            NgUploaderModule
        ],
        providers: [
            AuthenticationGuardService,
            TokenService
        ],
        bootstrap: [AppComponent],
        entryComponents: [AddPhotoComponent, TagInputComponent, CreateAlbumComponent, DirectComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map