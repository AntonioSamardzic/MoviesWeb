import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly ACTOR_URL = 'actors';

  public getAll() {
    return this.http.get(environment.apiUrl + this.ACTOR_URL);
  }

  public getOne(actorId) {
    return this.http.get(environment.apiUrl  + this.ACTOR_URL + '/' + actorId);
  }

  public deleteOne(actorId) {
    return this.http.delete(environment.apiUrl  + this.ACTOR_URL + '/' + actorId);
  }

  public addOne(actor) {
    return this.http.post(environment.apiUrl  + this.ACTOR_URL + '/', actor);
  }

  public putOne(actorId, actor) {
    return this.http.put(environment.apiUrl  + this.ACTOR_URL + '/' + actorId, actor);
  }

  public submit(actor) {
    if (!actor.id) {
      return this.addOne(actor);
    }

    return this.putOne(actor.id, actor);
  }
}
