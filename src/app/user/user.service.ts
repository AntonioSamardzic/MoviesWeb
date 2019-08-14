import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly USERS_URL = 'users';

  public getAll() {
    return this.http.get(environment.apiUrl + this.USERS_URL);
  }

  public getOne(userId) {
    return this.http.get(environment.apiUrl +  this.USERS_URL + '/' + userId);
  }

  public deleteOne(userId) {
    return this.http.delete(environment.apiUrl +  this.USERS_URL + '/' + userId);
  }

  public addOne(user) {
    return this.http.post(environment.apiUrl + this.USERS_URL + '/', user);
  }

  public putOne(userId, user) {
    return this.http.put(environment.apiUrl +  this.USERS_URL + '/' + userId, user);
  }

  public submit(user) {
    if (!user.id) {
      return this.addOne(user);
    }

    return this.putOne(user.id, user);
  }
}
