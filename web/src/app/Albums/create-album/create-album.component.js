var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AlbumApi } from '../../common/sdk/services/custom/Album';
import { SocialNetUserApi } from '../../common/sdk/services/custom/SocialNetUser';
import { LoopBackAuth } from '../../common/sdk/services/core/auth.service';
var CreateAlbumComponent = (function () {
    function CreateAlbumComponent(dialogRef, data, formBuilder, albumApi, userApi, auth) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.albumApi = albumApi;
        this.userApi = userApi;
        this.auth = auth;
        this.form = this.formBuilder.group({
            name: [this.data.name, [Validators.required]]
        });
    }
    CreateAlbumComponent.prototype.ngOnInit = function () {
    };
    CreateAlbumComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateAlbumComponent.prototype.submit = function (form) {
        var _this = this;
        if (this.data.id) {
            this.albumApi.patchAttributes(this.data.id, form).
                subscribe(function (value) {
                _this.dialogRef.close();
            });
        }
        else {
            this.userApi.createAlbums(this.auth.getCurrentUserId(), form).
                subscribe(function (value) {
                _this.dialogRef.close();
            });
        }
    };
    return CreateAlbumComponent;
}());
CreateAlbumComponent = __decorate([
    Component({
        selector: 'app-create-album',
        templateUrl: './create-album.component.html',
        styleUrls: ['./create-album.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, FormBuilder,
        AlbumApi,
        SocialNetUserApi,
        LoopBackAuth])
], CreateAlbumComponent);
export { CreateAlbumComponent };
//# sourceMappingURL=create-album.component.js.map