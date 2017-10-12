import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AlbumApi } from '../../common/sdk/services/custom/Album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  photos:any[];
  album:any;
  albumId;
  constructor(
    private Router:Router,
    private ActivatedRoute:ActivatedRoute,
    private AlbumApi:AlbumApi
  ) { }

  ngOnInit() {
    this.albumId = this.ActivatedRoute.snapshot.params['id'];
    this.getPhotos();
  }

  async getPhotos(){
    this.album = await this.AlbumApi.findById(this.albumId,{include:{photos:['album','tags']}}).toPromise();
    this.photos = this.album.photos;
  }

}
