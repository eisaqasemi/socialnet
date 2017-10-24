import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SocialNetUserApi } from '../common/sdk/services/custom/SocialNetUser';
import { LoopBackAuth } from '../common/sdk/services/core/auth.service';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MessageApi } from '../common/sdk/services/custom/Message'
@Component({
    selector: 'app-direct',
    templateUrl: 'direct.component.html',
    styleUrls:['direct.component.css']
  })
  export class DirectComponent implements OnInit {
    friends: any[] = [];
  
    constructor(
      public dialogRef: MatDialogRef<DirectComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private userApi:SocialNetUserApi,
      private auth:LoopBackAuth,
      private formBuilder:FormBuilder,
      private messageApi:MessageApi
    ) { }
  
    async ngOnInit() {
      this.friends = await this.userApi.getFriends(this.auth.getCurrentUserId()).toPromise();
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    direct(friend){
      this.messageApi.create({
        senderId:this.auth.getCurrentUserId(),
        recieverId:friend.id,
        photoId:this.data.photo.id
      }).subscribe(()=>{
        this.dialogRef.close();
      })
    }
  }