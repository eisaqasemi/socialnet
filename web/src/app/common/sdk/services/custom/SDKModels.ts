/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Photo } from '../../models/Photo';
import { Tag } from '../../models/Tag';
import { Album } from '../../models/Album';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Photo: Photo,
    Tag: Tag,
    Album: Album,
    
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
