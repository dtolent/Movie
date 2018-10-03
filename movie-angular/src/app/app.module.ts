import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { OnTvComponent } from './on-tv/on-tv.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AllMoviesComponent } from './in-theaters/all-movies/all-movies.component';
import { AllGenreComponent } from './in-theaters/all-genre/all-genre.component';
import { MovieComponent } from './in-theaters/movie/movie.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'intheaters', component: InTheatersComponent },
  { path: 'ontv', component: OnTvComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InTheatersComponent,
    OnTvComponent,
    HomeComponent,
    UsersComponent,
    AllMoviesComponent,
    AllGenreComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) //register routes for Angular to recognize
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
