import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpdataComponent} from './httpdata.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpdataService} from './../httpdata.service';
import {AuthGuard} from '../auth.guard';
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild([
      {path:'', component:HttpdataComponent, canActivate:[AuthGuard]},
    ])
  ],
  declarations: [HttpdataComponent],
  providers:[HttpdataService,AuthGuard]
})
export class HttpdataModule { }
