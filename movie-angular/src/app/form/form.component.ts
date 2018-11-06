import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// import { HttpClient,HttpParams } from '@angular/common/http';
import { MoviesService } from '../services/movies.service';
import { FormService } from '../services/form.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  searchInput='';

  constructor(private moviesService: MoviesService, private formService: FormService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getSearch();
  }
  public getSearch(term:String) {
    // this.activatedRoute.navigate(['search', term]);
    // const params = new HttpParams().set('search',this.searchInput);
    // const url = this.httpClient.get<repos[]>(this.baseURL + '/intheaters',{params});
    // console.log(params.toString());
    // console.log(params.get('term'));
    this.moviesService.searchMovie(this.searchInput).subscribe((data: any) => {
    this.formService.setData(data.results);


    });

  }


}
