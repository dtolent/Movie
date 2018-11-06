import {MatButtonModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [MatButtonModule,MatCardModule,MatGridListModule,MatPaginatorModule,MatInputModule,MatProgressSpinnerModule,MatMenuModule],
  exports: [MatButtonModule,MatCardModule,MatGridListModule,MatPaginatorModule,MatInputModule,MatProgressSpinnerModule,MatMenuModule],
})
export class MaterialModule { }
