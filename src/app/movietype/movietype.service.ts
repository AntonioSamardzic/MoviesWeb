import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovietypeService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly MOVIETYPES_URL = 'movietypes';

  public getAll() {
    return this.http.get(environment.apiUrl + this.MOVIETYPES_URL);
  }

  public getOne(movietypeId) {
    return this.http.get(environment.apiUrl  + this.MOVIETYPES_URL + '/' + movietypeId);
  }

  public deleteOne(movietypeId) {
    return this.http.delete(environment.apiUrl  + this.MOVIETYPES_URL + '/' + movietypeId);
  }

  public addOne(movietype) {
    return this.http.post(environment.apiUrl  + this.MOVIETYPES_URL + '/', movietype);
  }

  public putOne(movietypeId, movietype) {
    return this.http.put(environment.apiUrl  + this.MOVIETYPES_URL + '/' + movietypeId, movietype);
  }

  public submit(movietype) {
    return this.addOne(movietype);
  }
}
