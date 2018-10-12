import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie = new Movie();

  constructor( private moviesService: MoviesService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.movieSub = this.moviesService.getMovie(this.id).subscribe((data) => {
        this.movie=data;
      });
    });

  }


  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }

}
