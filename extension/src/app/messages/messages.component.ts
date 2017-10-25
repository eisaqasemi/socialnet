import { Component, OnInit } from '@angular/core';
import { MessageApi } from "../common/sdk/services/custom/Message"
import { LoopBackAuth } from "../common/sdk/services/core/auth.service"
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages;
  userId;
  constructor(
    private messageApi:MessageApi,
    private auth:LoopBackAuth
  ) { }

  async ngOnInit() {
    this.userId = parseInt(await this.auth.getCurrentUserId());
    this.messages = await this.messageApi.find({where:{
      or:[
      { senderId: this.auth.getCurrentUserId() },
      { recieverId: this.auth.getCurrentUserId() },
    ]},
    include:[{
      relation:'photo',
      scope:{
        include:['tags','album','owner']
      }
      },"sender","reciever"],
    order:"createdAt DESC"
  }).toPromise();
  }

}
