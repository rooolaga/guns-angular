import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsService} from '../products.service';
import {Product} from '../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  loadedProducts: Product[] = [];

  constructor(private http: HttpClient, private productService: ProductsService) { }

  ngOnInit() {
    this.productService.fetchProducts().subscribe(
      products => {
        this.loadedProducts = products;
        console.log(products);
      }
    );
  }
}
