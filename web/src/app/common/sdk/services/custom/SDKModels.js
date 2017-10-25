var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Photo } from '../../models/Photo';
import { Tag } from '../../models/Tag';
import { Album } from '../../models/Album';
import { Upload } from '../../models/Upload';
import { PhotoTag } from '../../models/PhotoTag';
import { Friendship } from '../../models/Friendship';
import { SocialNetUser } from '../../models/SocialNetUser';
import { Message } from '../../models/Message';
var SDKModels = (function () {
    function SDKModels() {
        this.models = {
            User: User,
            Photo: Photo,
            Tag: Tag,
            Album: Album,
            Upload: Upload,
            PhotoTag: PhotoTag,
            Friendship: Friendship,
            SocialNetUser: SocialNetUser,
            Message: Message,
        };
    }
    SDKModels.prototype.get = function (modelName) {
        return this.models[modelName];
    };
    SDKModels.prototype.getAll = function () {
        return this.models;
    };
    SDKModels.prototype.getModelNames = function () {
        return Object.keys(this.models);
    };
    return SDKModels;
}());
SDKModels = __decorate([
    Injectable()
], SDKModels);
export { SDKModels };
//# sourceMappingURL=SDKModels.js.map