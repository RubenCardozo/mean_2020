import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/IProduct';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productService: ProductsService;
  displayedColumns: Array<string> = ['name', 'price', 'category'];
  dataProducts = new MatTableDataSource(this.productService.getProducts());
  constructor() {}

  ngOnInit(): void {
    // this.productService.getProducts().subscribe(
    //   (dataProducts) => {
    //     console.log(dataProducts);
    //     this.dataProducts = dataProducts;
    //   },
    //   (err) => console.log(err)
    // );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataProducts.filter = filterValue.trim().toLowerCase();
  }
}
