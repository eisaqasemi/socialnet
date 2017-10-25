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
import { TokenService } from "./token.service";
var AuthenticationGuardService = (function () {
    function AuthenticationGuardService(router, token) {
        this.router = router;
        this.token = token;
    }
    /**
       * Check if the user is logged in before calling http
       *
       * @param route
       * @param state
       * @returns {boolean}
       */
    AuthenticationGuardService.prototype.canActivate = function (route, state) {
        if (!this.token.isExpired()) {
            console.log("hoo");
            return true;
        }
        else {
            this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    return AuthenticationGuardService;
}());
AuthenticationGuardService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router, TokenService])
], AuthenticationGuardService);
export { AuthenticationGuardService };
//# sourceMappingURL=AuthenticationGuard.service.js.map