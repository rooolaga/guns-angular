import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from './product.model';
import {map} from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class ProductsService {

  constructor(private http: HttpClient) {}

  fetchProducts() {
    return this.http
      .get<Product[]>('http://localhost:12345/products')
      .pipe(
        map(products => {
          const productArray: Product[] = [];
          for (const key in products) {
            if (products.hasOwnProperty(key)) {
              productArray.push({
                model: products[key].model,
                productType: products[key].productType,
                averagePrice: products[key].averagePrice,
                type: products[key].type
              });
            }
          }
          return productArray;
        })
      );
  }
}
