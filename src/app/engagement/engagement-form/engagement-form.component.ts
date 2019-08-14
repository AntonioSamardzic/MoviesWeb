import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/movie/movie.service';
import { SpinnerService } from 'src/app/shared/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { ActorService } from 'src/app/actor/actor.service';
import { EngagementService } from '../engagement.service';

@Component({
  selector: 'app-engagement-form',
  templateUrl: './engagement-form.component.html',
  styleUrls: ['./engagement-form.component.scss']
})
export class EngagementFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private spinner: SpinnerService,
    private router: Router,
    private toastr: ToastrService,
    private actorService: ActorService,
    private engagementService: EngagementService
  ) { }

  public engagement: any = {};
  public actors: any = [];
  public movies: any = [];
  public selectedActorId: any = {};
  public selectedMovieId: any = {};
  public errorMessage = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const engagementId = params.get('id');
      this.getActors();
      this.getMovies();
      if (engagementId != null) {
        this.getEngagement(engagementId);
      }


      // this.getMovies();
      // this.getActors();
      // this.spinner.hide();
    });
  }

  getEngagement(engagementId) {
    this.engagementService.getOne(engagementId).subscribe(response => {
      this.engagement = response;

      this.selectedActorId = this.engagement.actorId;
      this.selectedMovieId = this.engagement.movieId;
    });
  }

  onSubmit() {
    this.spinner.show();

    this.engagement.actorId = this.selectedActorId;
    this.engagement.movieId = this.selectedMovieId;

    this.engagementService.submit(this.engagement).subscribe(
      (response: any) => {
        this.toastr.success('Uspješno izvršeno!');
        this.router.navigate(['engagements']);
        this.spinner.hide();
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
        this.spinner.hide();
      });
  }

  getMovies() {
    this.movieService.getAll().subscribe((response: any) => {
      this.movies = response;
    });
  }

  getActors() {
    this.actorService.getAll().subscribe((response: any) => {
      this.actors = response;
    });
  }
}
