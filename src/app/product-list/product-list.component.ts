import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
 @Input() productList : Product[];
 @Output() visible = new EventEmitter<boolean>();
 @Output() message = new EventEmitter<string>();
  constructor() { }
 sendToParent(){
   this.visible.emit(true);
   this.message.emit("This is child's message");
 }
  ngOnInit() {
  }

  
}
