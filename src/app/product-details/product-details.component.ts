import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import {  Product } from '../models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.productId);
    this.productService.getProduct(this.route.snapshot.params.productId).subscribe((res: Product) => {
      this.product = res; console.log(res);

    });
  }

}
