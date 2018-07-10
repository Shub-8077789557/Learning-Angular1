import { Component, OnInit } from '@angular/core';
import {NewProducts} from '././newproducts';
import {CurrencyPipe} from './../customPipes/currency.pipe';
@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css'],
  
})
export class NewproductComponent implements OnInit {
ListofProducts : string = "ProductsList";
mrp:number=0;
  constructor() { }
newproducts : NewProducts[] =[
  {ProductNo : 21, Product : "Mercedes", ProductPrice: 5000},
  {ProductNo : 22, Product : "Audi", ProductPrice: 8000},
  {ProductNo : 23, Product : "BMW", ProductPrice: 10000},
]
  ngOnInit() {
  }

}
