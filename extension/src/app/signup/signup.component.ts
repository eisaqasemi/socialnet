import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { SocialNetUserApi } from '../common/sdk/services/custom/SocialNetUser';
import { Router } from '@angular/router'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    valForm: FormGroup;
    passwordForm: FormGroup;

    constructor(
      private fb: FormBuilder,
      private userApi: SocialNetUserApi,
      private router: Router
    ) {
        let passwordFormControl = new FormControl(null, Validators.required);
        this.valForm = fb.group({
            'firstName':[null,Validators.required],
            'lastName':[null,Validators.required],
            'email': [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': passwordFormControl,
            'confirmPassword': [null, CustomValidators.equalTo(passwordFormControl)]
        });
    }

    register($ev, value: any) {
        $ev.preventDefault();
        if (value) {
            this.userApi.create(value).subscribe(()=>{
              this.router.navigate(['/login'])
            })
        }
    }

    ngOnInit() {
    }

}
