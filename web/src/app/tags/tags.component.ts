import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TagApi } from '../common/sdk/services/custom/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  photos;
  tagId;
  tag;
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private tagApi:TagApi
  ) { }

  async ngOnInit() {
    this.tagId = parseInt(this.ActivatedRoute.snapshot.params['id']);
    this.tag = await this.tagApi.findById(this.tagId,{include:{relation:"photos",scope:{include:['tags','album','owner'],order:"createdAt DESC"}}}).toPromise();
  }

}
