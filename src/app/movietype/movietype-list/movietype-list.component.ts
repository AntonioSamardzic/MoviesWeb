import { Component, OnInit } from '@angular/core';
import { MovietypeService } from '../movietype.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movietype-list',
  templateUrl: './movietype-list.component.html',
  styleUrls: ['./movietype-list.component.scss']
})
export class MovietypeListComponent implements OnInit {

  constructor(
    private movietypeService: MovietypeService,
    private toastr: ToastrService,
    private router: Router,

  ) { }

  public movietypes = [];

  ngOnInit() {
    this.movietypeService.getAll().subscribe((response: any) => {
      this.movietypes = response;
    });
  }

  onAdd() {
    this.router.navigate (['movietypes/new']);
  }

  onEdit(movietypeId) {
    this.router.navigate(['movietypes', movietypeId]);


  }

  getAllMovietypes() {
    this.movietypeService.getAll().subscribe((response: any) => {
      this.movietypes = response;
    });
  }

  onDelete(movietypeId) {
    if (confirm('Jeste li sigurni?')) {
      this.movietypeService.deleteOne(movietypeId).subscribe(result => {
        this.getAllMovietypes();
        this.toastr.success('Uspješno izbrisano!');
      });
    }
  }

  onSelect(index: number) {
    console.log(index);
  }

}
