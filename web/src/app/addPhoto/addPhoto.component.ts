import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { PhotoApi } from '../common/sdk/services/custom/Photo'
import { TagApi } from '../common/sdk/services/custom/Tag'

@Component({
    selector: 'add-photo',
    templateUrl: 'addPhoto.component.html',
    styleUrls:['addPhoto.component.scss']
  })
  export class AddPhotoComponent {
    tags: any[]=[];
    fileUrls=[];
    constructor(
      public dialogRef: MatDialogRef<AddPhotoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private photoApi:PhotoApi,
      private tagApi:TagApi
    ) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    submit(){
      console.log(this.tags);
      console.log(this.fileUrls)
      this.tagApi.createMany(this.tags.map(val=>{ return {
        name:val.value
      } })).subscribe(tags=>{
        //this.photoApi.create()
      })
      
    }
  
  }