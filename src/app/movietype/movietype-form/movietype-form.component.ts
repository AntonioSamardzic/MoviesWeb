import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovietypeService } from '../movietype.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movietype-form',
  templateUrl: './movietype-form.component.html',
  styleUrls: ['./movietype-form.component.scss']
})
export class MovietypeFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private spinner: SpinnerService,
    private router: Router,
    private toastr: ToastrService,
    private movietypeService: MovietypeService,
    private location: Location
  ) { }

  public movietype: any = {};
  public errorMessage = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movietypeId = params['id'];

      if (movietypeId != null) {
        this.getMovietype(movietypeId);

      }
    });
  }

  getMovietype(movietypeId) {
    this.movietypeService.getOne(movietypeId).subscribe(response => {
      this.movietype = response;
    }
    );
  }

  onSubmit() {
    this.movietypeService.submit(this.movietype).subscribe(

      (response: any) => {
        this.toastr.success('Uspješno dodano!');
        this.router.navigate(['movietype']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
        this.spinner.hide();
      });
  }

  goBack() {
    this.location.back();
    return false;
  }


}
