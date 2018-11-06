import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PageEvent} from '@angular/material';

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-on-tv',
  templateUrl: './on-tv.component.html',
  styleUrls: ['./on-tv.component.css']
})
export class OnTvComponent implements OnInit {

  tvShows: Array<any> = [];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private tvService: MoviesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getTVShows();
  }

  public getTVShows(pageData: PageEvent) {
    this.tvService.getTVOnAir(pageData).subscribe((data: any) => {
    this.tvShows = data.results;
    console.log(data.results);
    });
  }

}
