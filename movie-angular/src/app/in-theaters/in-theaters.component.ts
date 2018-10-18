import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PageEvent} from '@angular/material';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.css']
})
export class InTheatersComponent implements OnInit {

  movies: Array<any> = [];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;
  constructor(private moviesService: MoviesService,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getMovies();

  }

  public getMovies() {
    this.moviesService.getNowPlaying(1).subscribe((data: any) => {
    this.movies = data.results;
    console.log(data.results);
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }


}
