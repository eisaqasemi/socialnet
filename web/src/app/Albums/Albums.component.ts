import { Component, OnInit } from '@angular/core';
import { AlbumApi } from '../common/sdk/services/custom/Album';
import { Router } from '@angular/router'
@Component({
  selector: 'app-Albums',
  templateUrl: './Albums.component.html',
  styleUrls: ['./Albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums:any[];
  constructor(
    private Router:Router
  ) {
    
   }

  async ngOnInit() {
    this.Router.navigate(['/albums']);
  }

}
