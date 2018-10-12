import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.css']
})
export class InTheatersComponent implements OnInit {

  movies: Array<any> = [];

  constructor(private moviesService: MoviesService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getMovies();

  }

  public getMovies() {
    this.moviesSub = this.moviesService.getNowPlaying(1).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  ngOnDestroy() {
    this.moviesSub.unsubscribe();
  }

}
