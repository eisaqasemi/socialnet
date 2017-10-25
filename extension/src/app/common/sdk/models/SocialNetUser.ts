/* tslint:disable */
import {
  Album
} from '../index';

declare var Object: any;
export interface SocialNetUserInterface {
  "firstName": string;
  "lastName": string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  "password"?: string;
  accessTokens?: any[];
  albums?: Album[];
  friends?: SocialNetUser[];
}

export class SocialNetUser implements SocialNetUserInterface {
  "firstName": string;
  "lastName": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  "password": string;
  accessTokens: any[];
  albums: Album[];
  friends: SocialNetUser[];
  constructor(data?: SocialNetUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SocialNetUser`.
   */
  public static getModelName() {
    return "SocialNetUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SocialNetUser for dynamic purposes.
  **/
  public static factory(data: SocialNetUserInterface): SocialNetUser{
    return new SocialNetUser(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'SocialNetUser',
      plural: 'SocialNetUsers',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        albums: {
          name: 'albums',
          type: 'Album[]',
          model: 'Album'
        },
        friends: {
          name: 'friends',
          type: 'SocialNetUser[]',
          model: 'SocialNetUser'
        },
      }
    }
  }
}
