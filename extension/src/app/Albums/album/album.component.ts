import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AlbumApi } from '../../common/sdk/services/custom/Album';
import { AddPhotoComponent } from "../../addPhoto/addPhoto.component";
import { MatDialog } from '@angular/material';
import { CreateAlbumComponent } from "../create-album/create-album.component";

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
    private AlbumApi:AlbumApi,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.albumId = parseInt(this.ActivatedRoute.snapshot.params['id']);
    this.getPhotos();
  }

  async getPhotos(){
    this.album = await this.AlbumApi.findById(this.albumId,
      {
        include:
        {
        relation:'photos',
        scope:{
          include:['tags','album','owner'],
          order:"createdAt DESC"
        }
        }
      }
    ).toPromise();
    this.photos = this.album.photos;
  }

  editAlbum(): void {
    let dialogRef = this.dialog.open(CreateAlbumComponent, {
      width: '50vw',
      data: { name:this.album.name,id:this.album.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getPhotos(); 
    });
  }

  removeAlbum(){
    this.AlbumApi.deleteById(this.albumId).subscribe(()=>{
      this.Router.navigate(['/albums']);
    })
  }

  addPhoto(): void {
    let dialogRef = this.dialog.open(AddPhotoComponent, {
      width: '50vw',
      data: {album:this.albumId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPhotos();
    });
  }

}
