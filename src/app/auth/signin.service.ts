import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private http: HttpClient
  ) { }

  public register(formData) {
    return this.http.post(environment.apiUrl + 'auth/register', formData);
  }

  /* TODO: fix this */
  public login(formData) {
    return this.http.post(environment.apiUrl + 'auth/login', formData);
  }
}
