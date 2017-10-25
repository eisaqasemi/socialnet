var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoComponent } from '../../addPhoto/addPhoto.component';
import { PhotoApi } from '../../common/sdk/services/custom/Photo';
import { DirectComponent } from "../../direct/direct.component";
import { LoopBackAuth } from "../../common/sdk/services/core/auth.service";
var PhotoComponent = (function () {
    function PhotoComponent(dialog, photoApi, auth) {
        this.dialog = dialog;
        this.photoApi = photoApi;
        this.auth = auth;
        this.refresh = new EventEmitter();
    }
    PhotoComponent.prototype.ngOnInit = function () {
        this.userId = parseInt(this.auth.getCurrentUserId());
    };
    PhotoComponent.prototype.edit = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddPhotoComponent, {
            width: '50vw',
            data: { title: this.photo.title, url: this.photo.url,
                album: this.photo.albumId, tags: (this.photo.tags || []).map(function (tag) { return tag.name; }),
                id: this.photo.id, privacy: this.photo.privacy }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.refresh.emit();
        });
    };
    PhotoComponent.prototype.delete = function () {
        var _this = this;
        this.photoApi.deleteById(this.photo.id).subscribe(function () {
            _this.refresh.emit();
        });
    };
    PhotoComponent.prototype.direct = function () {
        var dialogRef = this.dialog.open(DirectComponent, {
            width: '50vw',
            data: { photo: this.photo }
        });
    };
    return PhotoComponent;
}());
__decorate([
    Input('photo'),
    __metadata("design:type", Object)
], PhotoComponent.prototype, "photo", void 0);
__decorate([
    Output('refresh'),
    __metadata("design:type", Object)
], PhotoComponent.prototype, "refresh", void 0);
PhotoComponent = __decorate([
    Component({
        selector: 'app-photo',
        templateUrl: './photo.component.html',
        styleUrls: ['./photo.component.css']
    }),
    __metadata("design:paramtypes", [MatDialog,
        PhotoApi,
        LoopBackAuth])
], PhotoComponent);
export { PhotoComponent };
//# sourceMappingURL=photo.component.js.map