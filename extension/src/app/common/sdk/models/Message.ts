/* tslint:disable */
import {
  SocialNetUser,
  Photo
} from '../index';

declare var Object: any;
export interface MessageInterface {
  "id"?: number;
  "senderId"?: number;
  "reciever"?: number;
  "photoId"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  sender?: SocialNetUser;
  socialNetUser?: SocialNetUser;
  photo?: Photo;
}

export class Message implements MessageInterface {
  "id": number;
  "senderId": number;
  "reciever": number;
  "photoId": number;
  "createdAt": Date;
  "updatedAt": Date;
  sender: SocialNetUser;
  socialNetUser: SocialNetUser;
  photo: Photo;
  constructor(data?: MessageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Message`.
   */
  public static getModelName() {
    return "Message";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Message for dynamic purposes.
  **/
  public static factory(data: MessageInterface): Message{
    return new Message(data);
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
      name: 'Message',
      plural: 'Messages',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "senderId": {
          name: 'senderId',
          type: 'number'
        },
        "reciever": {
          name: 'reciever',
          type: 'number'
        },
        "photoId": {
          name: 'photoId',
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
      },
      relations: {
        sender: {
          name: 'sender',
          type: 'SocialNetUser',
          model: 'SocialNetUser'
        },
        socialNetUser: {
          name: 'socialNetUser',
          type: 'SocialNetUser',
          model: 'SocialNetUser'
        },
        photo: {
          name: 'photo',
          type: 'Photo',
          model: 'Photo'
        },
      }
    }
  }
}
