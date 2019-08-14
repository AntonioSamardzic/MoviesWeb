import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly MOVIES_URL = 'movies';

  public getAll() {
    return this.http.get(environment.apiUrl + this.MOVIES_URL );
  }

  public getOne(movieId) {
    return this.http.get(environment.apiUrl  + this.MOVIES_URL + '/' + movieId);
  }

  public deleteOne(movieId) {
    return this.http.delete(environment.apiUrl  + this.MOVIES_URL  + '/' + movieId);
  }

  public addOne(movie) {
    return this.http.post(environment.apiUrl  + this.MOVIES_URL, movie);
  }

  public putOne(movieId, movie) {
    return this.http.put(environment.apiUrl  + this.MOVIES_URL + '/' + movieId, movie);
  }

  public submit(movie) {
    if (!movie.id) {
      return this.addOne(movie);
    }

    return this.putOne(movie.id, movie);
  }
}
