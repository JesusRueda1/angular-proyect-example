import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router:Router) {
  this.productForm = this.fb.group({
  name: ['', Validators.required],
  category: ['', Validators.required],
  price: ['', Validators.required],
  status: ['', Validators.required],
  })
  }
  
  ngOnInit(): void {
  }
  
  addProduct(){
  
  const PRODUCT: Product = {
  name: this.productForm.get('name')?.value,
  category: this.productForm.get('category')?.value,
  price: this.productForm.get('price')?.value,
  status: this.productForm.get('status')?.value,
  }
  console.log(PRODUCT);
  this.router.navigate(['/'])
  }
  
  }
