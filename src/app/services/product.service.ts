import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];
    // {
    // name : `Amazing Bags`,
    // image : `https://images-na.ssl-images-amazon.com/images/I/61Lnw%2BeeaZL._SX425_.jpg`,
    // description : `It is a water proof bag`,
    // message : `loading image...`,
    // isAvailable: true,
    // },
    // {
    //   name : `sky bags`,
    //   // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: max-line-length
    //   image : `https://cdn.shopify.com/s/files/1/0012/9892/3622/products/53243_031_4_0_b1ad647b-1f0f-449f-8a42-423a47bb1ce8_1200x.jpg?v=1550866009`,
    //   description : `It is light weight bag`,
    //   message : `loading image...`,
    //   isAvailable: true,
    // }
// private baseUrl = 'http://localhost:3000/';
  constructor(
    private httpClient: HttpClient
  ) {}

  getProducts() {
    return this.httpClient.get(`${environment.baseUrl}product`);
  }

  getProduct(productId) {
    return this.httpClient.get(environment.baseUrl + '/product/' + productId);
  }
  addProduct(product) {
    return this.httpClient.post(`${environment.baseUrl}product`, product);
  }
deleteProd(id) {
  return this.httpClient.delete(`${environment.baseUrl}product/` + id, id );
}
}
