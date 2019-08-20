import { Component, OnInit } from '@angular/core';
import { BoughtService } from '../bought.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bought-list',
  templateUrl: './bought-list.component.html',
  styleUrls: ['./bought-list.component.scss']
})
export class BoughtListComponent implements OnInit {

  constructor(
    private boughtService: BoughtService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public boughts = [];

  ngOnInit() {
    this.boughtService.getAll().subscribe((response: any) => {
      this.boughts = response;
    });
  }

  onAdd() {
    this.router.navigate (['boughts/new']);
  }

  onEdit(boughtId) {
    this.router.navigate(['boughts', boughtId]);
  }


  getAllBoughts() {
    this.boughtService.getAll().subscribe((response: any) => {
      this.boughts = response;
    });
  }

  onDelete( boughtId) {
    if (confirm('Jeste li sigurni?')) {
      this.boughtService.deleteOne(boughtId).subscribe(result => {
        this.getAllBoughts();
        this.toastr.success('Uspješno obrisano!');
      });
    }
  }


}
