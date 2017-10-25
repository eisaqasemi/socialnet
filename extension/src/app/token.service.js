var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoopBackAuth } from "./common/sdk/services/core/auth.service";
/**
 * @author Nimatullah Razmjo < razmjo@netlinks.ws>
 * @class TokenService
 * @description
 * This class is used for managing the token
 */
var TokenService = (function () {
    function TokenService(router, loopBackAuth) {
        this.router = router;
        this.loopBackAuth = loopBackAuth;
    }
    /**
       * Get the current Token
       *
       * @returns {Token}
       */
    TokenService.prototype.getToken = function () {
        return this.loopBackAuth.getToken();
    };
    /**
       * Update the current Token
       *
       * @param accessToken
       */
    TokenService.prototype.setToken = function (token) {
        this.loopBackAuth.setToken(token);
    };
    /**
       * Remove the current Token
       */
    TokenService.prototype.removeToken = function () {
        this.loopBackAuth.clear();
    };
    /**
       * This method will return the actual token string, not the object instance.
       *
       * @method getAccessTokenId
       * @return {string}
       * @description
       **/
    TokenService.prototype.getAccessTokenId = function () {
        return this.loopBackAuth.getAccessTokenId();
    };
    TokenService.prototype.isAuthenticated = function () {
        return !(this.getCurrentUserId() === "" ||
            this.getCurrentUserId() == null ||
            this.getCurrentUserId() == "null");
    };
    /**
       * This method will return the current user id, it can be number or string.
       *
       * @method getCurrentUserId
       * @return {any}
       * @description
       **/
    TokenService.prototype.getCurrentUserId = function () {
        return this.loopBackAuth.getCurrentUserId();
    };
    /**
       * This method will return the current user instance.
       *
       * @method getCurrentUserData
       * @return {any}
       * @description
       **/
    TokenService.prototype.getCurrentUserData = function () {
        return this.loopBackAuth.getCurrentUserData();
    };
    /**
       * Check if the the session is already expired
       *
       * @returns {boolean}
       *
       * @memberOf TokenService
       */
    TokenService.prototype.isExpired = function () {
        if (this.isRememberMe()) {
            return this.calculateExpirationDate();
        }
        else {
            return !this.isAuthenticated();
        }
    };
    /**
       * Calculate Expiration Date
       *
       * @returns {boolean}
       *
       * @memberOf TokenService
       */
    TokenService.prototype.calculateExpirationDate = function () {
        var create = new Date(this.getToken().created);
        var ttl = this.getToken().ttl;
        if (new Date().valueOf() === create.valueOf()) {
            return true;
        }
        return new Date().valueOf() > create.valueOf() + ttl * 1000;
    };
    /**
       * Check if the user has checked remember me
       *
       * @returns {boolean}
       *
       * @memberOf TokenService
       */
    TokenService.prototype.isRememberMe = function () {
        if (this.getRememberMe() === null || this.getRememberMe() === "false") {
            return false;
        }
        return true;
    };
    /**
       * Set rememeber me to localStorage
       *
       * @param {boolean} remember_me
       *
       * @memberOf TokenService
       */
    TokenService.prototype.setRemeberMe = function (remember_me) {
        if (remember_me) {
            localStorage.setItem("remember_me", "true");
        }
        else {
            localStorage.setItem("remember_me", "false");
        }
    };
    /**
       * get remember me from localStorage
       *
       * @returns {string}
       *
       * @memberOf TokenService
       */
    TokenService.prototype.getRememberMe = function () {
        return localStorage.getItem("remember_me");
    };
    return TokenService;
}());
TokenService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router, LoopBackAuth])
], TokenService);
export { TokenService };
//# sourceMappingURL=token.service.js.map