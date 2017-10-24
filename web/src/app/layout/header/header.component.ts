import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TokenService } from "../../token.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private token: TokenService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.token.removeToken();
    this.router.navigate(["/login"]);
    return;
  }

}
