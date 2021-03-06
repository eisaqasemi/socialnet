
import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AlbumApi } from '../../common/sdk/services/custom/Album';
import { SocialNetUserApi } from '../../common/sdk/services/custom/SocialNetUser';
import { LoopBackAuth } from '../../common/sdk/services/core/auth.service';
@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  form:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateAlbumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder:FormBuilder,
    private albumApi:AlbumApi,
    private userApi:SocialNetUserApi,
    private auth:LoopBackAuth
  ) { 
    this.form = this.formBuilder.group({
      name:[this.data.name,[Validators.required]]
    })
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(form){

    if(this.data.id){
      this.albumApi.patchAttributes(this.data.id,form).
      subscribe(value=>{
        this.dialogRef.close();
      }) 
    }else{

      this.userApi.createAlbums(this.auth.getCurrentUserId(),form).
      subscribe(value=>{
        this.dialogRef.close();
      }) 
    }
       
  }

}
