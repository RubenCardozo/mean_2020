import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
//import { MatSortModule } from '@angular/material/sort';
//import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    //MatSortModule,
    //MatPaginatorModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    //MatSortModule,
    //MatPaginatorModule,
  ],
})
export class MaterialModule {}
