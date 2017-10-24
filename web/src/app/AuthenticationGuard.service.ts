import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { TokenService } from "./token.service";

@Injectable()
export class AuthenticationGuardService implements CanActivate {
  constructor(private router: Router, private token: TokenService) {}

  /**
     * Check if the user is logged in before calling http
     *
     * @param route
     * @param state
     * @returns {boolean}
     */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.token.isExpired()) {
        console.log("hoo")
      return true;
    }else{
        this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
        return false;
    }
    
  }
}
