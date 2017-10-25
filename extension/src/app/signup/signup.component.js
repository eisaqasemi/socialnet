var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SocialNetUserApi } from '../common/sdk/services/custom/SocialNetUser';
import { Router } from '@angular/router';
var SignupComponent = (function () {
    function SignupComponent(fb, userApi, router) {
        this.fb = fb;
        this.userApi = userApi;
        this.router = router;
        var passwordFormControl = new FormControl(null, Validators.required);
        this.valForm = fb.group({
            'firstName': [null, Validators.required],
            'lastName': [null, Validators.required],
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': passwordFormControl,
            'confirmPassword': [null, CustomValidators.equalTo(passwordFormControl)]
        });
    }
    SignupComponent.prototype.register = function ($ev, value) {
        var _this = this;
        $ev.preventDefault();
        if (value) {
            this.userApi.create(value).subscribe(function () {
                _this.router.navigate(['/login']);
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css']
    }),
    __metadata("design:paramtypes", [FormBuilder,
        SocialNetUserApi,
        Router])
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map