import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { MovietypeService } from 'src/app/movietype/movietype.service';

@Component ({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router,
    private toastr: ToastrService,
    private companyService: CompanyService,
    private movietypeService: MovietypeService
  ) { }

  public movie: any = {};
  public companies: any [];
  public selectedCompany;
  public errorMessage = '';
  public movietypes: any [];
  public selectedMovietype;

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId = params['id'];

      this.getCompanies();
      this.getMovietypes();

      if (movieId != null) {
        this.getMovie(movieId);
      }
    });
  }

  getMovie(movieId) {
    this.movieService.getOne(movieId).subscribe(response => {
      this.movie = response;

      this.selectedCompany = this.movie.companyId;
      this.selectedMovietype = this.movie.movieTypeId;
    }
    );
  }

  onSubmit() {
    this.movie.companyId = this.selectedCompany;
    this.movie.movieTypeId = this.selectedMovietype;

    this.movieService.submit(this.movie).subscribe(
      (response: any) => {
        this.toastr.success('Uspješno dodano!');
        this.router.navigate(['movies']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

  getCompanies() {
    this.companyService.getAll().subscribe((response: any) => {
        this.companies = response;
      }
    );
  }

getMovietypes() {
  this.movietypeService.getAll().subscribe((response: any) => {
      this.movietypes = response;
    }
  );
}

}
