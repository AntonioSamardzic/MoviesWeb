import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly COMPANIES_URL = 'companies';

  public getAll() {
    return this.http.get(environment.apiUrl + this.COMPANIES_URL);
  }

  public getOne(companyId) {
    return this.http.get(environment.apiUrl +  this.COMPANIES_URL + '/' + companyId);
  }

  public deleteOne(companyId) {
    return this.http.delete(environment.apiUrl + this.COMPANIES_URL + '/' + companyId);
  }

  public addOne(company) {
    return this.http.post(environment.apiUrl +  this.COMPANIES_URL + '/', company);
  }

  public putOne(companyId, company) {
    return this.http.put(environment.apiUrl + this.COMPANIES_URL + '/' + companyId, company);
  }

  public submit(company) {
    if (!company.id) {
      return this.addOne(company);
    }

    return this.putOne(company.id, company);
  }
}
