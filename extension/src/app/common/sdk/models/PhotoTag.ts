/* tslint:disable */
import {
  Photo,
  Tag
} from '../index';

declare var Object: any;
export interface PhotoTagInterface {
  "id"?: number;
  "photoId"?: number;
  "tagId"?: number;
  "createdAt": Date;
  "updatedAt": Date;
  photo?: Photo;
  tag?: Tag;
}

export class PhotoTag implements PhotoTagInterface {
  "id": number;
  "photoId": number;
  "tagId": number;
  "createdAt": Date;
  "updatedAt": Date;
  photo: Photo;
  tag: Tag;
  constructor(data?: PhotoTagInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PhotoTag`.
   */
  public static getModelName() {
    return "PhotoTag";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PhotoTag for dynamic purposes.
  **/
  public static factory(data: PhotoTagInterface): PhotoTag{
    return new PhotoTag(data);
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
      name: 'PhotoTag',
      plural: 'PhotoTags',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "photoId": {
          name: 'photoId',
          type: 'number'
        },
        "tagId": {
          name: 'tagId',
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
        photo: {
          name: 'photo',
          type: 'Photo',
          model: 'Photo'
        },
        tag: {
          name: 'tag',
          type: 'Tag',
          model: 'Tag'
        },
      }
    }
  }
}
