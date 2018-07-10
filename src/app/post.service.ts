import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../post';

@Injectable()
export class PostService {

  constructor(private httpService : HttpClient) { }

  getPosts(){
    return this.httpService.get<Post[]>('');
  }

  addPosts(post : Post){
    this.httpService.post('',post);
  }
}
