import { Component, OnInit } from '@angular/core';
import { JwtHelper } from './auth/jwt.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private jwt: JwtHelper
  ) { }

  ngOnInit() {
    this.setUser();
  }

  public user = {
    email: '',
  };

  public setUser() {
    this.user = this.jwt.getUser();
  }

  title = 'MyMoviesApp';
}


