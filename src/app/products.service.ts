import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ProductsService {

  constructor(private http: HttpClient) {}

  fetchProducts() {
    this.http
      .get('http://localhost:12345/products').subscribe(posts => {
        console.log(posts);
      });
  }
}
