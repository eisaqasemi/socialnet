/* tslint:disable */
import {
  Photo
} from '../index';

declare var Object: any;
export interface TagInterface {
  "name": string;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  photos?: Photo[];
}

export class Tag implements TagInterface {
  "name": string;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  photos: Photo[];
  constructor(data?: TagInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tag`.
   */
  public static getModelName() {
    return "Tag";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tag for dynamic purposes.
  **/
  public static factory(data: TagInterface): Tag{
    return new Tag(data);
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
      name: 'Tag',
      plural: 'Tags',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
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
      },
      relations: {
        photos: {
          name: 'photos',
          type: 'Photo[]',
          model: 'Photo'
        },
      }
    }
  }
}
