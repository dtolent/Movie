import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie.model';


@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  tvShow: Movie = new Movie();
  id: number;
  player: YT.Player;
  trailer: Array<any>;

  constructor( private tvShowService: MoviesService,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.tvShowService.getTVDetails(this.id).subscribe((data) => {
      this.tvShow=data;
      console.log(this.tvShow);
      this.trailer = data.videos.results[0];
      });
    });
  }

}
