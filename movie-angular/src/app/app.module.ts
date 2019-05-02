import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { InTheatersComponent } from './in-theaters/in-theaters.component';
import { OnTvComponent } from './on-tv/on-tv.component';
import { MovieComponent } from './in-theaters/movie/movie.component';
import { SafeStylePipe } from './pipes/safeStyle.pipe';
import { MaterialModule } from './material';
import { TvShowComponent } from './on-tv/tv-show/tv-show.component';
import { HeaderComponent } from './header/header.component';


const appRoutes: Routes = [
  { path: 'intheaters', component: InTheatersComponent },
  { path: 'intheaters/search/:term', component: InTheatersComponent },
  { path: 'intheaters/:id', component: MovieComponent },
  { path: 'ontv', component: OnTvComponent },
  { path: 'ontv/:id', component: TvShowComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InTheatersComponent,
    OnTvComponent,
    MovieComponent,
    SafeStylePipe,
    TvShowComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes), //register routes for Angular to recognize
    YoutubePlayerModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
