import { Component, OnInit,Input, EventEmitter,Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPhotoComponent } from '../../addPhoto/addPhoto.component';
import { PhotoApi } from '../../common/sdk/services/custom/Photo';
import { DirectComponent } from "../../direct/direct.component";
import { LoopBackAuth } from "../../common/sdk/services/core/auth.service";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input('photo') photo:any;
  @Output('refresh') refresh= new EventEmitter<any>();
  userId;
  constructor(
    private dialog: MatDialog,
    private photoApi: PhotoApi,
    private auth:LoopBackAuth
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.auth.getCurrentUserId());
  }

  edit(): void {
    let dialogRef = this.dialog.open(AddPhotoComponent, {
      data: { title:this.photo.title,url:this.photo.url,
         album:this.photo.albumId,tags:(this.photo.tags || []).map(tag=>tag.name),
         id:this.photo.id,privacy:this.photo.privacy }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh.emit()
    });
  }

  delete(){
    this.photoApi.deleteById(this.photo.id).subscribe(()=>{
      this.refresh.emit();
    })
  }

  direct(){
    let dialogRef = this.dialog.open(DirectComponent, {
      data: { photo:this.photo }
    });
  }

}
