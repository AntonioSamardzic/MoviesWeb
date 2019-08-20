import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from 'src/app/movie/movie.service';
import { UserService } from 'src/app/user/user.service';
import { BoughtService } from '../bought.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bought-form',
  templateUrl: './bought-form.component.html',
  styleUrls: ['./bought-form.component.scss']
})
export class BoughtFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private boughtService: BoughtService,
    private router: Router,
    private toastr: ToastrService,
    private movieService: MovieService,
    private userService: UserService,
    private location: Location
  ) { }


  public bought: any = {};

  public movies: any = [];
  public users: any = [];

  public selectedUserId: any = {};
  public selectedMovieId: any = {};

  public errorMessage = '';

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const boughtId = params.get('id');
      this.getUsers();
      this.getMovies();
      if (boughtId != null) {
        this.getBought(boughtId);
      }


      // this.getMovies();
      // this.getActors();
      // this.spinner.hide();
    });
  }

  getBought(boughtId) {
    this.boughtService.getOne(boughtId).subscribe(response => {
      this.bought = response;

      this.selectedUserId = this.bought.userId;
      this.selectedMovieId = this.bought.movieId;
    });
  }

  onSubmit() {

    this.bought.userId = this.selectedUserId;
    this.bought.movieId = this.selectedMovieId;

    this.boughtService.submit(this.bought).subscribe(
      (response: any) => {
        this.toastr.success('Uspješno izvršeno!');
        this.router.navigate(['boughts']);

      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];

      });
  }

  getMovies() {
    this.movieService.getAll().subscribe((response: any) => {
      this.movies = response;
    });
  }

  getUsers() {
    this.userService.getAll().subscribe(response => {
      this.users = response;
    });
  }

  goBack() {
    this.location.back();
    return false;
  }

}
