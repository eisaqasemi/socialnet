var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
import { Component } from '@angular/core';
import { AlbumApi } from '../../common/sdk/services/custom/Album';
import { MatDialog } from '@angular/material';
import { CreateAlbumComponent } from '../create-album/create-album.component';
import { LoopBackAuth } from "../../common/sdk/services/core/auth.service";
var AlbumListComponent = (function () {
    function AlbumListComponent(AlbumApi, dialog, auth) {
        this.AlbumApi = AlbumApi;
        this.dialog = dialog;
        this.auth = auth;
        this.sorts = [{ label: "Publication Date", value: "createdAt" }, { label: "Title", value: "name" }];
        this.order = 'DESC';
    }
    AlbumListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getAlbums();
                return [2 /*return*/];
            });
        });
    };
    AlbumListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(CreateAlbumComponent, {
            width: '50vw',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.getAlbums();
        });
    };
    AlbumListComponent.prototype.sortChange = function (sort) {
        this.sort = sort;
        this.getAlbums();
    };
    AlbumListComponent.prototype.orderChange = function (order) {
        this.order = order;
        this.getAlbums();
    };
    AlbumListComponent.prototype.getAlbums = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.sort) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.AlbumApi.find({ where: { socialNetUserId: this.auth.getCurrentUserId() }, order: this.sort + ' ' + this.order }).toPromise()];
                    case 1:
                        _a.albums = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        _b = this;
                        return [4 /*yield*/, this.AlbumApi.find({ where: { socialNetUserId: this.auth.getCurrentUserId() }, order: 'createdAt DESC' }).toPromise()];
                    case 3:
                        _b.albums = _c.sent();
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AlbumListComponent;
}());
AlbumListComponent = __decorate([
    Component({
        selector: 'app-album-list',
        templateUrl: './album-list.component.html',
        styleUrls: ['./album-list.component.css']
    }),
    __metadata("design:paramtypes", [AlbumApi,
        MatDialog,
        LoopBackAuth])
], AlbumListComponent);
export { AlbumListComponent };
//# sourceMappingURL=album-list.component.js.map