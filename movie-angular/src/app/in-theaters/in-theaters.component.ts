import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PageEvent} from '@angular/material';
import { Observable } from "rxjs/Observable";

import { MoviesService } from '../services/movies.service';
// import { MoviesService } from '../form/form.component';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-in-theaters',
  templateUrl: './in-theaters.component.html',
  styleUrls: ['./in-theaters.component.css']
})
export class InTheatersComponent implements OnInit, DoCheck {

  movies: Array<any> = [];
  search = false;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex = 1;

  constructor(private moviesService: MoviesService,
              private activatedRoute: ActivatedRoute,
              private formService: FormService) { }

  ngOnInit() {
    this.getMovies();
  }
  ngDoCheck() {
      // if (this.formService.getData()) {
      //     this.movies = this.formService.getData();
      // }
      // else {
      //     this.getMovies();
      // }
    }

  // public getMovies(pageData: PageEvent) {
  //   //TODO! make this work on search results
  //   this.moviesService.getNowPlaying( pageData ? pageData.pageIndex + 1 : 1 ).subscribe((data: any) => {
  //   this.movies = data.results;
  //   console.log(data.results);
  //   });
  // }
  public getMovies() {
    //TODO! make this work on search results
    this.moviesService.getNowPlaying(  1 ).subscribe((data: any) => {
    this.movies = data.results;
    console.log(data.results);
    });
  }


}
