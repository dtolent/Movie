import {MatButtonModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [MatButtonModule,MatCardModule,MatGridListModule,MatPaginatorModule],
  exports: [MatButtonModule,MatCardModule,MatGridListModule,MatPaginatorModule],
})
export class MaterialModule { }
