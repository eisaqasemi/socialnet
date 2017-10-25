/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Photo } from '../../models/Photo';
import { Tag } from '../../models/Tag';
import { Album } from '../../models/Album';
import { Upload } from '../../models/Upload';
import { PhotoTag } from '../../models/PhotoTag';
import { Friendship } from '../../models/Friendship';
import { SocialNetUser } from '../../models/SocialNetUser';
import { Message } from '../../models/Message';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Photo: Photo,
    Tag: Tag,
    Album: Album,
    Upload: Upload,
    PhotoTag: PhotoTag,
    Friendship: Friendship,
    SocialNetUser: SocialNetUser,
    Message: Message,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
