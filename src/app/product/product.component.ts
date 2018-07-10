import { Component, OnInit, ViewChild, DoCheck} from '@angular/core';
import {Product} from "../product";
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductService} from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @ViewChild(ProductListComponent) productListComponent : ProductListComponent;
  message : string;
  product : Product = new Product();
  
  products : Product[] = [{
    id:11, item:"Mobile", price: 2000},
    {id:12, item:"AC", price: 2500
  }]
  
  constructor(private productService : ProductService) { }
  
  receiveFromChild(visible:boolean){
   console.log(visible);
  }

  getFromChild(message:string){
   this.message = message;
  }

  
  ngOnInit() {
   
  }

  addProduct(){
    this.productService.addProduct(this.product);
    this.product = new Product();
    this.productListComponent.productList = this.productService.getProducts(); 
  }

  ngDoCheck(){
    console.log("Hi SB, this is an event!!")
  }

  
}
