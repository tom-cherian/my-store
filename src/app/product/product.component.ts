import { Component, OnInit, Input , TemplateRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private router: Router, private modalService: BsModalService, private productService: ProductService) { }

  @Input() product;
  @Output() newDeleteEvent = new EventEmitter();
  modalRef: BsModalRef;
  message: string;

 config = {
  backdrop: true,
  ignoreBackdropClick: true
};
  addToCart() {
    alert(`clicked`);
  }
  goToDetails(productId) {
    this.router.navigate(['product', productId]);
  }
  deleteProduct(productId) {
    this.productService.deleteProd(productId).subscribe(res => {console.log('deleted');
    });

  }

  ngOnInit() {
  }
    openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
    // this.modalRef = this.modalService.show(template, this.config);
}
confirm(): void {
  this.message = 'Confirmed!';
  console.log(this.message);

  this.modalRef.hide();
}
decline(): void {
  this.message = 'Declined!';
  console.log(this.message);
  this.modalRef.hide();
}
}
