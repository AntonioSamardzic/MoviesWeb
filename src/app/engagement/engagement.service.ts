import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EngagementService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly ENGAGEMENTS_URL = 'engagements';

  public getAll() {
    return this.http.get(environment.apiUrl + this.ENGAGEMENTS_URL);
  }

  public getOne(engagementId) {
    return this.http.get(environment.apiUrl + this.ENGAGEMENTS_URL + '/' + engagementId);
  }

  public deleteOne(engagementId) {
    return this.http.delete(environment.apiUrl + this.ENGAGEMENTS_URL + '/' + engagementId);
  }

  public addOne(engagement) {
    return this.http.post(environment.apiUrl + this.ENGAGEMENTS_URL, engagement);
  }

  public putOne(engagementId, engagement) {
    return this.http.put(environment.apiUrl + this.ENGAGEMENTS_URL + '/' + engagementId, engagement);
  }

  public submit(engagement) {
    if (engagement.id != null) {
      return this.putOne(engagement.id, engagement);
    }

    return this.addOne(engagement);
  }
}
