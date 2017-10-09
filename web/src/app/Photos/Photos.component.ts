import { Component, OnInit } from '@angular/core';
import { PhotoApi } from '../common/sdk/services/custom/Photo'
@Component({
  selector: 'app-Photos',
  templateUrl: './Photos.component.html',
  styleUrls: ['./Photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:any[];
  constructor(
    private photoApi:PhotoApi
  ) { }

  async ngOnInit() {
    this.photos = await this.photoApi.find().toPromise();
  }

}
