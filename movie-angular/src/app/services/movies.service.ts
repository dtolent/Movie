import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiBase: string;
  apiKey: string;
  constructor(private httpClient: HttpClient) {
    this.apiBase = 'https://api.themoviedb.org/3/';
    this.apiKey = ''; //use own key
  }
}
