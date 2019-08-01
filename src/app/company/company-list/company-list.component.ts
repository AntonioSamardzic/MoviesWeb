import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor(
    private companyService: CompanyService
  ) { }

    private companies = [];

  ngOnInit() {
    this.companyService.getAll().subscribe((response: any) => {
      this.companies = response;
  });

}
}
