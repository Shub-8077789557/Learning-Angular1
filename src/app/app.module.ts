import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductService} from './product.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component';
import {PostService} from './post.service';
import {RouterModule} from '@angular/router';
import {RoutingModule} from'./routing/routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';
import {AuthGuard} from './auth.guard';
import {CustomerModule} from'./customer/customer.module';
import {HTTP_CONFIG,API_CONFIG} from './httpconfig/httpconfig.service';
import {ProductFactoryProvider} from './product/product.factory';
import { ProductModule } from './product/product.module';
import { HoverDirective } from './directive/hover.directive';
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PagenotfoundComponent,
    LoginComponent,
    HoverDirective,
   ],
  imports: [
    BrowserModule, BrowserAnimationsModule,HttpClientModule,CustomerModule,ProductModule,
    RoutingModule,MatButtonModule, MatCheckboxModule
  ],
  providers: [ProductService,PostService, LoginService,AuthGuard,ProductFactoryProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }



