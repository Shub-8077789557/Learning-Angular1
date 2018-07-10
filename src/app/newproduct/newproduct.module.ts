import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NewproductComponent} from './newproduct.component';
import { ProductDetailComponent} from './../product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../auth.guard';
import { CurrencyPipe } from './../customPipes/currency.pipe';
import { PricePipe } from './../customPipes/price.pipe';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [NewproductComponent,ProductDetailComponent, CurrencyPipe, PricePipe ],
  imports: [
    CommonModule,FormsModule,MatButtonModule,RouterModule.forChild([
      {path:'', component:NewproductComponent, canActivate:[AuthGuard],canActivateChild:[AuthGuard],
     children:[
      {path:'newproducts/:id', component:ProductDetailComponent},
     ]},  
    ])
  ],
  
})
export class NewproductModule { }
