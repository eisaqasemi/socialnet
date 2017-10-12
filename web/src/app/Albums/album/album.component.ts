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
  constructor(
    private Router:Router,
    private ActivatedRoute:ActivatedRoute,
    private AlbumApi:AlbumApi
  ) { }

  async ngOnInit() {
    let albumId = this.ActivatedRoute.snapshot.params['id'];
    this.album = await this.AlbumApi.findById(albumId,{include:{photos:['album','tags']}}).toPromise();
    this.photos = this.album.photos;
    console.log(this.album);
  }

}
