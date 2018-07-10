import { Injectable } from '@angular/core';
import {Product} from './product';
@Injectable()
export class ProductService {
  products : Product[] = [{
    id:11, item:"Mobile", price: 2000},
    {id:12, item:"AC", price: 2500
  }]
  constructor(private isLogIn : boolean) { console.log(isLogIn) }
   
  getProducts(){
    return this.products;
  }

  addProduct(product : Product){
  this.products.push(product);
  }
}
