import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SDKToken } from "./common/sdk/models/BaseModels";
import { LoopBackAuth } from "./common/sdk/services/core/auth.service";

/**
 * @author Nimatullah Razmjo < razmjo@netlinks.ws>
 * @class TokenService
 * @description
 * This class is used for managing the token
 */

@Injectable()
export class TokenService {
  constructor(private router: Router, private loopBackAuth: LoopBackAuth) {}

  /**
     * Get the current Token
     *
     * @returns {Token}
     */

  getToken(): SDKToken {
    return this.loopBackAuth.getToken();
  }

  /**
     * Update the current Token
     *
     * @param accessToken
     */
  setToken(token: SDKToken): void {
    this.loopBackAuth.setToken(token);
  }

  /**
     * Remove the current Token
     */
  removeToken(): void {
    this.loopBackAuth.clear();
  }
  /**
     * This method will return the actual token string, not the object instance.
     *
     * @method getAccessTokenId
     * @return {string}
     * @description
     **/
  public getAccessTokenId(): string {
    return this.loopBackAuth.getAccessTokenId();
  }

  public isAuthenticated(): boolean {
    return !(
      this.getCurrentUserId() === "" ||
      this.getCurrentUserId() == null ||
      this.getCurrentUserId() == "null"
    );
  }
  /**
     * This method will return the current user id, it can be number or string.
     *
     * @method getCurrentUserId
     * @return {any}
     * @description
     **/
  public getCurrentUserId(): any {
    return this.loopBackAuth.getCurrentUserId();
  }
  /**
     * This method will return the current user instance.
     *
     * @method getCurrentUserData
     * @return {any}
     * @description
     **/
  public getCurrentUserData(): any {
    return this.loopBackAuth.getCurrentUserData();
  }
  /**
     * Check if the the session is already expired
     *
     * @returns {boolean}
     *
     * @memberOf TokenService
     */
  public isExpired(): boolean {
    if (this.isRememberMe()) {
      return this.calculateExpirationDate();
    } else {
      return !this.isAuthenticated();
    }
  }

  /**
     * Calculate Expiration Date
     *
     * @returns {boolean}
     *
     * @memberOf TokenService
     */
  calculateExpirationDate(): boolean {
    const create = new Date(this.getToken().created);
    const ttl = this.getToken().ttl;
    if (new Date().valueOf() === create.valueOf()) {
      return true;
    }
    return new Date().valueOf() > create.valueOf() + ttl * 1000;
  }
  /**
     * Check if the user has checked remember me
     *
     * @returns {boolean}
     *
     * @memberOf TokenService
     */
  public isRememberMe(): boolean {
    if (this.getRememberMe() === null || this.getRememberMe() === "false") {
      return false;
    }
    return true;
  }
  /**
     * Set rememeber me to localStorage
     *
     * @param {boolean} remember_me
     *
     * @memberOf TokenService
     */
  public setRemeberMe(remember_me: boolean): void {
    if (remember_me) {
      localStorage.setItem("remember_me", "true");
    } else {
      localStorage.setItem("remember_me", "false");
    }
  }

  /**
     * get remember me from localStorage
     *
     * @returns {string}
     *
     * @memberOf TokenService
     */
  public getRememberMe(): string {
    return localStorage.getItem("remember_me");
  }
}
