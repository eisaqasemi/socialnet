import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { TokenService } from "../token.service";
import { SocialNetUserApi } from "../common/sdk/services/custom/SocialNetUser";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  valForm: FormGroup;
  returnUrl: string;
  loginFailed: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: SocialNetUserApi,
    private token: TokenService
  ) {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "";
    this.isLoggedIn();
  }

  /**
     * Login using email and password
     *
     * @param $ev
     * @param value
     */
  login($ev, value: any) {
    $ev.preventDefault();
    for (let c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
    }
    if (this.valForm.valid) {
      // check if the user is admin

      this.authService
        .login(
          { email: value.email, password: value.password },
          "",
          true
        )
        .subscribe(
          response => {
            this.token.setRemeberMe(value.account_remember);
            this.router.navigate([this.returnUrl]);
            // (<any>window).location = this.returnUrl;
            console.log(response.roles);
            (<any>window).localStorage.setItem(
              "rolesOfUser",
              JSON.stringify(response.roles)
            );
            return;
          },
          error => {
            this.loginFailed = true;
          }
        );
    }
  }

  /**
     * Logout
     */
  logout() {
    this.token.removeToken();
    this.router.navigate(["/login"]);
    return;
  }

  /**
   * Check if user is logged
   */
  isLoggedIn() {

    if (!this.token.isExpired()) {
      this.router.navigate([this.returnUrl]);
    }
  }

  ngOnInit() {
    this.valForm = this.fb.group({
      email: [
        null,
        Validators.required
      ],
      password: [null, Validators.required],
      account_remember: [""]
    });
  }
}
