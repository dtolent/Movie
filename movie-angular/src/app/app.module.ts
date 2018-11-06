import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { OnTvComponent } from './on-tv/on-tv.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MovieComponent } from './in-theaters/movie/movie.component';
import { SafeStylePipe } from './pipes/safeStyle.pipe';
import { MaterialModule } from './material';
import { TvShowComponent } from './on-tv/tv-show/tv-show.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { FormComponent } from './form/form.component';




const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'intheaters', component: InTheatersComponent },
  { path: 'intheaters/:id', component: MovieComponent },
  { path: 'ontv', component: OnTvComponent },
  { path: 'ontv/:id', component: TvShowComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InTheatersComponent,
    OnTvComponent,
    HomeComponent,
    UsersComponent,
    MovieComponent,
    SafeStylePipe,
    TvShowComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //register routes for Angular to recognize
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
