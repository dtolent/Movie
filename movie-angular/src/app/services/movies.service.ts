import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_URL = 'https://api.themoviedb.org/3/';
  API_KEY = 'c94952e4d201234df4fb9727a2417493'; //use own key

  constructor(private httpClient: HttpClient) {}

  getNowPlaying(page: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}movie/now_playing?api_key=${this.API_KEY}&language=en-US&page=${page}`);
  }
  getMovieDetails(id: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}movie/${id}?api_key=${this.API_KEY}&language=en-US`);
  }
  getTVOnAir(page: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}tv/on_the_air?api_key=${this.API_KEY}&language=en-US&page=${page}`);
  }
  getTVDetails(id: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}tv/${id}?api_key=${this.API_KEY}&language=en-US`);
  }
  searchMovie(query: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}search/movie?api_key=${this.API_KEY}&query=${query}&language=en-US`);
  }



}
