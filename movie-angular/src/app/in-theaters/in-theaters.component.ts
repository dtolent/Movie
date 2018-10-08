import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.css']
})
export class InTheatersComponent implements OnInit {

  private movies: Array<any> = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
    // this.getDetails();
  }
  public getMovies() {
    this.moviesService.getNowPlaying(1).subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  // public getDetails() {
  //   this.moviesService.getMovie(335983).subscribe((data: any) => {
  //       console.log(data);
  //   });
  // }

}
