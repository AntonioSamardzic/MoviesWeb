import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BoughtService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly BOUGHTS_URL = 'boughts';

  public getAll() {
    return this.http.get(environment.apiUrl + this.BOUGHTS_URL);
  }

  public getOne(boughtId) {
    return this.http.get(environment.apiUrl + this.BOUGHTS_URL + '/' + boughtId);
  }

  public deleteOne(boughtId) {
    return this.http.delete(environment.apiUrl + this.BOUGHTS_URL + '/' + boughtId);
  }

  public addOne(bought) {
    return this.http.post(environment.apiUrl +  this.BOUGHTS_URL, bought);
  }

  public putOne(boughtId, bought) {
    return this.http.put(environment.apiUrl +  this.BOUGHTS_URL + '/' + boughtId, bought);
  }

  public submit(bought) {
    if (bought.id != null) {
      return this.putOne(bought.id, bought);
    }

    return this.addOne(bought);
  }


}
