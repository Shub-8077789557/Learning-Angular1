import { Component , OnInit, ElementRef} from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {state, trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('toggle1', [
      state('open', style({ height: '130px' })),
      state('closed', style({ height: '*' })),
      transition('open <=> closed', animate('200ms ease-in-out'))
    ])
  ],
})
export class AppComponent implements OnInit {
  state = "open";
  productName : string = "Mercedes";
  hidden : boolean;
  product:Product;
  productList : Product[];
  el:ElementRef;
 
  constructor(private productService : ProductService) {

  }

  getProducts(){
    this.productList = this.productService.getProducts();
  }
  addProduct(){
    this.product = {id : 13, item : "Refrigerator", price : 3000};
    this.productService.addProduct(this.product);
    this.getProducts();
  }
  

  ngOnInit() : void{
    this.getProducts();
    
    }

  toggle(){
    this.hidden = !this.hidden;
  }
  
  toggle1() {
    this.state = (this.state=="open")? "closed": "open";
    
  }
}


