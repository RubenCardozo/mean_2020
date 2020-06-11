import { ProductsService } from './../../services/products.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // displayedColumns: String[] = ['name', 'price', 'category'];
  // dataProducts = new MatTableDataSource();

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    // this.productService.getProducts().subscribe((products) => {
    //   this.dataProducts.data = products;
    // });
  }
  // ngAfterViewInit() {
  //   this.dataProducts.paginator = this.paginator;
  //   this.dataProducts.sort = this.sort;
  // }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataProducts.filter = filterValue.trim().toLowerCase();
  // }
}
