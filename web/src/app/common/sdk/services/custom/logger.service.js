var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
import { Injectable } from '@angular/core';
import { LoopBackConfig } from '../../lb.config';
/**
* @author Jonathan Casarrubias <twitter:@johncasarrubias> <github:@johncasarrubias>
* @module LoggerService
* @license MIT
* @description
* Console Log wrapper that can be disabled in production mode
**/
var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (LoopBackConfig.debuggable())
            console.log.apply(console, args);
    };
    LoggerService.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (LoopBackConfig.debuggable())
            console.info.apply(console, args);
    };
    LoggerService.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (LoopBackConfig.debuggable())
            console.error.apply(console, args);
    };
    LoggerService.prototype.count = function (arg) {
        if (LoopBackConfig.debuggable())
            console.count(arg);
    };
    LoggerService.prototype.group = function (arg) {
        if (LoopBackConfig.debuggable())
            console.count(arg);
    };
    LoggerService.prototype.groupEnd = function () {
        if (LoopBackConfig.debuggable())
            console.groupEnd();
    };
    LoggerService.prototype.profile = function (arg) {
        if (LoopBackConfig.debuggable())
            console.count(arg);
    };
    LoggerService.prototype.profileEnd = function () {
        if (LoopBackConfig.debuggable())
            console.profileEnd();
    };
    LoggerService.prototype.time = function (arg) {
        if (LoopBackConfig.debuggable())
            console.time(arg);
    };
    LoggerService.prototype.timeEnd = function (arg) {
        if (LoopBackConfig.debuggable())
            console.timeEnd(arg);
    };
    return LoggerService;
}());
LoggerService = __decorate([
    Injectable()
], LoggerService);
export { LoggerService };
//# sourceMappingURL=logger.service.js.map