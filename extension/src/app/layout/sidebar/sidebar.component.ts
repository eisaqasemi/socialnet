import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menus = [
    {
      name: 'Photos',
      link:"/photos",
      icon:"photo"
    },
    {
      name: 'Albums',
      link:"/albums",
      icon:"photo_album"
    },
    {
      name:"Friends",
      link:"/friends",
      icon:"group"
    },{
      name:"Messages",
      link:"/messages",
      icon:"message"
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
