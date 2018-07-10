import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { ProductComponent } from '../product/product.component';
import { CustomerComponent } from '../customer/customer.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import {LoginComponent} from '../login/login.component';
import {AuthGuard} from '../auth.guard';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {NewproductComponent} from '../newproduct/newproduct.component';
import { HttpdataComponent } from '../httpdata/httpdata.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'post-list', component:PostListComponent , canActivate:[AuthGuard]},
      {path : 'product', component:ProductComponent, canActivate:[AuthGuard]},
    {path:'newproducts', loadChildren:'app/newproduct/newproduct.module#NewproductModule'}, 
    //{path:'newproducts/:id', component:ProductDetailComponent, canActivate:[AuthGuard]},
    {path:'customer', component:CustomerComponent, canActivate:[AuthGuard]},
    {path:'httpdata',loadChildren:'app/httpdata/httpdata.module#HttpdataModule'},
    {path:'login', component:LoginComponent},
    {path:'',redirectTo:'login', pathMatch:'full'},
   {path:'**', component: PagenotfoundComponent, canActivate:[AuthGuard]}])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
