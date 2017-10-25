import { Component, OnInit } from '@angular/core';
import { SocialNetUserApi } from '../common/sdk/services/custom/SocialNetUser';
import { LoopBackAuth } from '../common/sdk/services/core/auth.service';
import { FriendshipApi } from '../common/sdk/services/custom/Friendship';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends = [
    // {firstName:"eisa",lastName:"qasemi"},
    // {firstName:"eisa",lastName:"qasemi"},
    // {firstName:"eisa",lastName:"qasemi"}
  ]
  users=[];
  query;
  userId;
  constructor(
    private userApi:SocialNetUserApi,
    private auth:LoopBackAuth,
    private friendship:FriendshipApi
  ) { }

  async ngOnInit() {
    this.userId = parseInt( await this.auth.getCurrentUserId());
    this.getFriends();
  }

  search(){
    this.userApi.search(this.query).subscribe(val=>{
      this.users = val;
    })
  }

  unfriend(user){
    this.friendship.unfriend(this.userId,user.id)
    .subscribe(result=>{
      this.search();
      this.getFriends();
    });
  }
  
  getFriends(){
    this.userApi.getFriends(this.userId).subscribe(friends=>{
      this.friends = friends;
    })
  }
  async friend(user){

    if(user.isFriend){
      this.friendship.unfriend(this.userId,user.id)
        .subscribe(result=>{
          this.search();
          this.getFriends();
        });
      
    }else{
      this.friendship.createMany([
        {socialNetUserId:this.userId,friendId:user.id},
        {friendId:this.userId,socialNetUserId:user.id}
      ])
      .subscribe(result=>{
        this.search();
        this.getFriends();
      })
    }
  }
}
