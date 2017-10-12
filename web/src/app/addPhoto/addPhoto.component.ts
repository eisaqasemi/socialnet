import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PhotoApi } from '../common/sdk/services/custom/Photo';
import { TagApi } from '../common/sdk/services/custom/Tag';
import { AlbumApi } from '../common/sdk/services/custom/Album';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms'
@Component({
    selector: 'add-photo',
    templateUrl: 'addPhoto.component.html',
    styleUrls:['addPhoto.component.scss']
  })
  export class AddPhotoComponent implements OnInit {
    tags: any[] = [];
    suggestedTags : any[] = [];
    fileUrls=[];
    form:FormGroup;
    albums:any[];
    constructor(
      public dialogRef: MatDialogRef<AddPhotoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private photoApi:PhotoApi,
      private tagApi:TagApi,
      private formBuilder:FormBuilder,
      private albumApi:AlbumApi
    ) { }
  
    async ngOnInit() {
      this.suggestedTags = await this.tagApi.find().toPromise().then(tags=>tags.map(tag=>(tag as any).name))
      this.albums = await this.albumApi.find().toPromise();
      this.form = this.formBuilder.group({
        title:[this.data.title,[Validators.required]],
        url:[this.data.url,[Validators.required]],
        album:[this.data.album,[Validators.required]],
        tags:[this.data.tags]
      })
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    submit(form){
      if(this.data.id){
        this.photoApi.editPhoto(this.data.id,form).
        subscribe(value=>{
          this.dialogRef.close();
        }) 
      }else{
        this.photoApi.addPhoto(form).
        subscribe(value=>{
          this.dialogRef.close();
        }) 
      }
         
    }
  }