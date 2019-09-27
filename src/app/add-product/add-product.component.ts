import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductionForm: FormGroup;
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    this.addProductionForm = this.formBuilder.group({
      title: ['', [Validators.minLength(3), Validators.required]],
      imageUrl: [''],
      description: [''],
      isAvailable: ['true'],
      price: [0]
    });
  }
  submit() {
    if (this.addProductionForm.valid) {
      console.log(this.addProductionForm.value);
      const product = { ...this.addProductionForm.value };
      product.isAvailable = product.isAvailable === ' true' ? true : false;
      this.productService.addProduct(product).subscribe(res => {
        console.log(res);
        this.addProductionForm.reset({ isAvailable: true });
      });
    }
  }

}
