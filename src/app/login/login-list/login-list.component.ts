import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'src/app/auth/jwt.helper';
import { SigninService } from 'src/app/auth/signin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component ({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.scss']
})
export class LoginListComponent implements OnInit {

    constructor(
      private auth: SigninService,
      private jwt: JwtHelper,
      private router: Router,
      private toastr: ToastrService
    ) { }

    public registerData = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      card: ''
    };

    public loginData = {
      email: '',
      password: '',
    };

    ngOnInit() {
    }

    onRegister() {
      this.auth.register(this.registerData).subscribe(
        (response: any) => {
        this.toastr.success('Uspješna registracija!');
        const token = response.token;
        this.jwt.setToken(token);
        this.jwt.setUser(response.user);
      },
      (response) => {
        if (response.error.Message === 'WRONG_EMAIL_PASSWORD') {
          this.toastr.error('Pogrešna kombinacija emaila/lozinke!');
          this.registerData.password = '';
        }
      });
      return false;
    }

    onSubmit() {
      this.auth.login(this.loginData).subscribe(
        (response: any) => {
          const token = response.token;
          this.jwt.setToken(token);
          this.jwt.setUser(response.user);
          this.router.navigate (['/']);
          setTimeout(() => {
            location.reload();
          }, 500);
        },
        (response) => {
          if (response.error.Message === 'WRONG_EMAIL_PASSWORD') {
            this.toastr.error('Pogrešna kombinacija emaila/lozinke!');
            this.loginData.password = '';
          }
        });
      return false;
    }

  }




