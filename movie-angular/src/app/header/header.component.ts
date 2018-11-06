import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // searchInput='';
  // searchValue='TEST';
  constructor(private moviesService: MoviesService
  ) { }

  ngOnInit() {
    // this.getSearch
  }

  // public getSearch() {
  //   this.moviesService.searcMovie(this.searchInput).subscribe((data: any) => {
  //   this.mov = data.results;
  //   console.log(data.results);
  //   });
  // }


}
