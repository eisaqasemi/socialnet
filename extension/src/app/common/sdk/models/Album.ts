/* tslint:disable */
import {
  Photo,
  User
} from '../index';

declare var Object: any;
export interface AlbumInterface {
  "name": string;
  "id"?: number;
  "userId"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  photos?: Photo[];
  user?: User;
}

export class Album implements AlbumInterface {
  "name": string;
  "id": number;
  "userId": number;
  "createdAt": Date;
  "updatedAt": Date;
  photos: Photo[];
  user: User;
  constructor(data?: AlbumInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Album`.
   */
  public static getModelName() {
    return "Album";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Album for dynamic purposes.
  **/
  public static factory(data: AlbumInterface): Album{
    return new Album(data);
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
      name: 'Album',
      plural: 'Albums',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "userId": {
          name: 'userId',
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
        photos: {
          name: 'photos',
          type: 'Photo[]',
          model: 'Photo'
        },
        user: {
          name: 'user',
          type: 'User',
          model: 'User'
        },
      }
    }
  }
}
