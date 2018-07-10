import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from './product.component';
import {ProductListComponent} from '../product-list/product-list.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
 CommonModule, FormsModule ],
  declarations: [ProductComponent,ProductListComponent],
  exports : [FormsModule]
})
export class ProductModule { }
