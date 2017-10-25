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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PhotoApi } from '../common/sdk/services/custom/Photo';
import { TagApi } from '../common/sdk/services/custom/Tag';
import { AlbumApi } from '../common/sdk/services/custom/Album';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoopBackAuth } from "../common/sdk/services/core/auth.service";
var AddPhotoComponent = (function () {
    function AddPhotoComponent(dialogRef, data, photoApi, tagApi, formBuilder, albumApi, auth) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.photoApi = photoApi;
        this.tagApi = tagApi;
        this.formBuilder = formBuilder;
        this.albumApi = albumApi;
        this.auth = auth;
        this.tags = [];
        this.suggestedTags = [];
        this.fileUrls = [];
    }
    AddPhotoComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.tagApi.find().toPromise().then(function (tags) { return tags.map(function (tag) { return tag.name; }); })];
                    case 1:
                        _a.suggestedTags = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.albumApi.find({ where: { socialNetUserId: this.auth.getCurrentUserId() } }).toPromise()];
                    case 2:
                        _b.albums = _c.sent();
                        this.form = this.formBuilder.group({
                            title: [this.data.title, [Validators.required]],
                            url: [this.data.url, [Validators.required]],
                            album: [this.data.album, [Validators.required]],
                            privacy: [this.data.privacy ? 1 : 0, [Validators.required]],
                            tags: [this.data.tags]
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPhotoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddPhotoComponent.prototype.submit = function (form) {
        var _this = this;
        if (this.data.id) {
            this.photoApi.editPhoto(this.data.id, form).
                subscribe(function (value) {
                _this.dialogRef.close();
            });
        }
        else {
            this.photoApi.addPhoto(form).
                subscribe(function (value) {
                _this.dialogRef.close();
            });
        }
    };
    return AddPhotoComponent;
}());
AddPhotoComponent = __decorate([
    Component({
        selector: 'add-photo',
        templateUrl: 'addPhoto.component.html',
        styleUrls: ['addPhoto.component.scss']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, PhotoApi,
        TagApi,
        FormBuilder,
        AlbumApi,
        LoopBackAuth])
], AddPhotoComponent);
export { AddPhotoComponent };
//# sourceMappingURL=addPhoto.component.js.map