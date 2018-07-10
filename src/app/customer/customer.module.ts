import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerComponent} from './customer.component';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  declarations: [CustomerComponent],
  exports:[ReactiveFormsModule]
})
export class CustomerModule { }
