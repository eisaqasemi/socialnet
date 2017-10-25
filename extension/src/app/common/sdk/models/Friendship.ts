/* tslint:disable */
import {
  SocialNetUser
} from '../index';

declare var Object: any;
export interface FriendshipInterface {
  "id"?: number;
  "socialNetUserId"?: number;
  "friendId"?: number;
  socialNetUser?: SocialNetUser;
  friend?: SocialNetUser;
}

export class Friendship implements FriendshipInterface {
  "id": number;
  "socialNetUserId": number;
  "friendId": number;
  socialNetUser: SocialNetUser;
  friend: SocialNetUser;
  constructor(data?: FriendshipInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Friendship`.
   */
  public static getModelName() {
    return "Friendship";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Friendship for dynamic purposes.
  **/
  public static factory(data: FriendshipInterface): Friendship{
    return new Friendship(data);
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
      name: 'Friendship',
      plural: 'Friendships',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "socialNetUserId": {
          name: 'socialNetUserId',
          type: 'number'
        },
        "friendId": {
          name: 'friendId',
          type: 'number'
        },
      },
      relations: {
        socialNetUser: {
          name: 'socialNetUser',
          type: 'SocialNetUser',
          model: 'SocialNetUser'
        },
        friend: {
          name: 'friend',
          type: 'SocialNetUser',
          model: 'SocialNetUser'
        },
      }
    }
  }
}
