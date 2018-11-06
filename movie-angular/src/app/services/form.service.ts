import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService{

    private movies: Array<any> = [];
    private searchString: String;

    setData(data:string){
        this.movies = data;
        console.log(this.movies);
    }

    getData():Array<any>{
        return this.movies;
    }
}
