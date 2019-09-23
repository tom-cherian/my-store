import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product;
  constructor(private router: Router) { }
  addToCart() {
    alert(`clicked`);
  }
  goToDetails(productId) {
    this.router.navigate(['product', productId]);
  }

  ngOnInit() {
  }

}
