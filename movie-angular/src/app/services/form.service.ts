import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService{

    private movies: Array<any> = [];
    private searchString: String;

    setData(data:any){
        this.searchString = data;
        console.log(this.searchString);
    }

    getData():Array<any>{
        return this.movies;
    }
}
