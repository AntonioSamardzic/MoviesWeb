import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  public movies = [];

  ngOnInit() {
    this.movieService.getAll().subscribe((response: any) => {
      this.movies = response;
    });
  }

  onAdd() {
    this.router.navigate (['movies/new']);
  }

  onEdit(movieId) {
    this.router.navigate(['movies', movieId]);


  }

  getAllMovies() {
    this.movieService.getAll().subscribe((response: any) => {
      this.movies = response;
    });
  }

  onDelete(movieId) {
    if (confirm('Jeste li sigurni?')) {
      this.movieService.deleteOne(movieId).subscribe(result => {
        this.getAllMovies();
        this.toastr.success('Uspješno obrisano!');
      });
    }
  }

  onSelect(index: number) {
    console.log(index);
  }


}
