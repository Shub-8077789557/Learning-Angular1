import { Component, OnInit } from '@angular/core';
import { HttpdataService} from './../httpdata.service';
import {Post} from './../../post';
@Component({
  selector: 'app-httpdata',
  templateUrl: './httpdata.component.html',
  styleUrls: ['./httpdata.component.css'],
  providers:[HttpdataService ]
})
export class HttpdataComponent implements OnInit {
  
  constructor(private httpService : HttpdataService ) { }
  posts : Post[];
  ngOnInit() {
    this.httpService.getData().subscribe((data)=>
       this.posts = data,(error)=>console.log(error));
    }
    

  }


