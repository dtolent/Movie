import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';
// import { Trailer } from '../../models/trailer.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie = new Movie();
  id: number;
  player: YT.Player;
  trailer: Array<any>;
  cast: Array<any>;

  constructor( private moviesService: MoviesService,
               private activatedRoute: ActivatedRoute,
               private location: Location ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.moviesService.getMovieCredits(this.id).subscribe((data) => {
        this.cast = data.cast;
      });
      this.moviesService.getMovieDetails(this.id).subscribe((data) => {
      this.movie=data;
      this.trailer = data.videos.results[0];
      console.log(data);
      });
    });

  }

  public goBack(): void {
    this.location.back();
  }
  savePlayer(player) {
   this.player = player;
   console.log('player instance', player);
  }
  onStateChange(event) {
   console.log('player state', event.data);
  }


}
