import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../../post';
import {Router} from '@angular/router';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts : Post[];
  constructor(private postService : PostService, private router:Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data)=>
       this.posts = data,
      (err)=> console.log(err));
    }
    
    navigateToCustomer(){
      this.router.navigate(['customer']);
    }  
}
