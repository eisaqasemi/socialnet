import { Component, OnInit } from '@angular/core';
import { PhotoApi } from '../common/sdk/services/custom/Photo';
import { MatDialog } from '@angular/material';
import { AddPhotoComponent } from '../addPhoto/addPhoto.component';
import { LoopBackAuth } from "../common/sdk/services/core/auth.service"
@Component({
  selector: 'app-Photos',
  templateUrl: './Photos.component.html',
  styleUrls: ['./Photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:any[];
  sorts = [{label:"Publication Date",value:"createdAt"},{label:"Title",value:"title"},{label:"tags",value:"tags"}]
  sort:string;
  order:string = 'DESC';
  constructor(
    private photoApi:PhotoApi,
    private dialog: MatDialog,
    private auth:LoopBackAuth
  ) { }

  async ngOnInit() {
    
    this.getPhotos();

  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AddPhotoComponent, {
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getPhotos();
    });
  }

  sortChange(sort){
    this.sort = sort;
    this.getPhotos();
  }

  orderChange(order){
    this.order = order;
    this.getPhotos();
  }

  async getPhotos(){
    if(this.sort){
      this.photos = await this.photoApi.getPhotos(this.sort,this.order).toPromise();
    }else{
      this.photos = await this.photoApi.getPhotos('createdAt','DESC').toPromise();
    }
    
  }

}
