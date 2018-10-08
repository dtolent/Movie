import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_URL = 'https://api.themoviedb.org/3/';
  API_KEY = ''; //use own key

  constructor(private httpClient: HttpClient) {}

  getNowPlaying(page: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}movie/now_playing?api_key=${this.API_KEY}&page=${this.page}`);
  }

  // getMovie(id: number): Observable<any> {
  //   return this.httpClient.get(`${this.API_URL}movie/${id}?api_key=${this.API_KEY}`);
  // }

}
