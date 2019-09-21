import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'src/app/auth/jwt.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public jwt: JwtHelper
  ) { }

  public user: any = {};

  ngOnInit() {
    this.user = this.jwt.getUser();
  }

  signOut() {
    this.jwt.clear();
    location.reload();
  }

}
