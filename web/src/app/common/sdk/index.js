var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';
import { SocketDriver } from './sockets/socket.driver';
import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { UserApi } from './services/custom/User';
import { PhotoApi } from './services/custom/Photo';
import { TagApi } from './services/custom/Tag';
import { AlbumApi } from './services/custom/Album';
import { UploadApi } from './services/custom/Upload';
import { PhotoTagApi } from './services/custom/PhotoTag';
import { FriendshipApi } from './services/custom/Friendship';
import { SocialNetUserApi } from './services/custom/SocialNetUser';
import { MessageApi } from './services/custom/Message';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
var SDKBrowserModule = SDKBrowserModule_1 = (function () {
    function SDKBrowserModule() {
    }
    SDKBrowserModule.forRoot = function (internalStorageProvider) {
        if (internalStorageProvider === void 0) { internalStorageProvider = {
            provide: InternalStorage,
            useClass: CookieBrowser
        }; }
        return {
            ngModule: SDKBrowserModule_1,
            providers: [
                LoopBackAuth,
                LoggerService,
                JSONSearchParams,
                SDKModels,
                RealTime,
                UserApi,
                PhotoApi,
                TagApi,
                AlbumApi,
                UploadApi,
                PhotoTagApi,
                FriendshipApi,
                SocialNetUserApi,
                MessageApi,
                internalStorageProvider,
                { provide: SDKStorage, useClass: StorageBrowser },
                { provide: SocketDriver, useClass: SocketBrowser }
            ]
        };
    };
    return SDKBrowserModule;
}());
SDKBrowserModule = SDKBrowserModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, HttpModule],
        declarations: [],
        exports: [],
        providers: [
            ErrorHandler,
            SocketConnection
        ]
    })
], SDKBrowserModule);
export { SDKBrowserModule };
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';
var SDKBrowserModule_1;
//# sourceMappingURL=index.js.map