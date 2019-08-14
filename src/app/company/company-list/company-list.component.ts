import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SpinnerService } from 'src/app/shared/spinner.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  constructor(
    private companyService: CompanyService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

    public companies = [];

  ngOnInit() {
    this.getAllCompanies();

}

onAdd() {
  this.router.navigate (['companies/new']);
}

onEdit(companyId) {
  this.router.navigate(['companies', companyId]);
}

getAllCompanies() {
  this.companyService.getAll().subscribe((response: any) => {
    this.companies = response;
  });
}

onDelete(companyId) {
  if (confirm('Jeste li sigurni?')) {
    this.companyService.deleteOne(companyId).subscribe(result => {
      this.getAllCompanies();
      this.toastr.success('Uspješno obrisano!');
    });
  }
}



}
