import { Component, OnInit } from '@angular/core';
import { EngagementService } from '../engagement.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { UserService } from 'src/app/user/user.service';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-engagement-list',
  templateUrl: './engagement-list.component.html',
  styleUrls: ['./engagement-list.component.scss']
})
export class EngagementListComponent implements OnInit {

  constructor(
    private engagementService: EngagementService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public engagements = [];

  ngOnInit() {
      this.getAllEngagements();
    }

  getAllEngagements() {
    this.engagementService.getAll().subscribe((response: any) => {
      this.engagements = response;
    });
  }

  onDelete(engagementId) {
    if (confirm('Jeste li sigurni?')) {
      this.engagementService.deleteOne(engagementId).subscribe(result => {
        this.getAllEngagements();
        this.toastr.success('Uspješno obrisano!');
      });
    }
  }


  onAdd() {
    this.router.navigate(['engagements/new']);
  }

  onEdit(engagementId) {
    this.router.navigate(['engagements', engagementId]);
  }

}
