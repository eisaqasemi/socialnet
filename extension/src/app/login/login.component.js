var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { TokenService } from "../token.service";
import { SocialNetUserApi } from "../common/sdk/services/custom/SocialNetUser";
var LoginComponent = (function () {
    function LoginComponent(fb, router, route, authService, token) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.token = token;
        this.loginFailed = false;
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "";
        this.isLoggedIn();
    }
    /**
       * Login using email and password
       *
       * @param $ev
       * @param value
       */
    LoginComponent.prototype.login = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            // check if the user is admin
            this.authService
                .login({ email: value.email, password: value.password }, "", true)
                .subscribe(function (response) {
                _this.token.setRemeberMe(value.account_remember);
                _this.router.navigate([_this.returnUrl]);
                // (<any>window).location = this.returnUrl;
                console.log(response.roles);
                window.localStorage.setItem("rolesOfUser", JSON.stringify(response.roles));
                return;
            }, function (error) {
                _this.loginFailed = true;
            });
        }
    };
    /**
       * Logout
       */
    LoginComponent.prototype.logout = function () {
        this.token.removeToken();
        this.router.navigate(["/login"]);
        return;
    };
    /**
     * Check if user is logged
     */
    LoginComponent.prototype.isLoggedIn = function () {
        if (!this.token.isExpired()) {
            this.router.navigate([this.returnUrl]);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.valForm = this.fb.group({
            email: [
                null,
                Validators.required
            ],
            password: [null, Validators.required],
            account_remember: [""]
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: "app-login",
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.css"]
    }),
    __metadata("design:paramtypes", [FormBuilder,
        Router,
        ActivatedRoute,
        SocialNetUserApi,
        TokenService])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map