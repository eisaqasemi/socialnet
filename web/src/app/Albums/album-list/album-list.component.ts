import { Component, OnInit } from '@angular/core';
import { AlbumApi } from '../../common/sdk/services/custom/Album';
import { MatDialog } from '@angular/material';
import { CreateAlbumComponent } from '../create-album/create-album.component'
import { LoopBackAuth } from "../../common/sdk/services/core/auth.service";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums:any[];
  sorts = [{label:"Publication Date",value:"createdAt"},{label:"Title",value:"name"}]
  sort:string;
  order:string = 'DESC';
  constructor(
    private AlbumApi:AlbumApi,
    private dialog: MatDialog,
    private auth:LoopBackAuth
  ) {
    
   }

  async ngOnInit() {
    this.getAlbums()
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateAlbumComponent, {
      width: '50vw',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAlbums(); 
    });
  }

  sortChange(sort){
    this.sort = sort;
    this.getAlbums();
  }

  orderChange(order){
    this.order = order;
    this.getAlbums();
  }

  async getAlbums(){
    if(this.sort){
      this.albums = await this.AlbumApi.find({where:{socialNetUserId:this.auth.getCurrentUserId()},order:this.sort+' '+this.order}).toPromise();
    }else{
      this.albums = await this.AlbumApi.find({where:{socialNetUserId:this.auth.getCurrentUserId()},order:'createdAt DESC'}).toPromise();
    }
    
  }

}
