import {MatButtonModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [MatButtonModule,MatCardModule,MatGridListModule,MatPaginatorModule,MatInputModule,MatProgressSpinnerModule,MatMenuModule,MatIconModule,MatTabsModule],
  exports: [MatButtonModule,MatCardModule,MatGridListModule,MatPaginatorModule,MatInputModule,MatProgressSpinnerModule,MatMenuModule,MatIconModule,MatTabsModule],
})
export class MaterialModule { }
