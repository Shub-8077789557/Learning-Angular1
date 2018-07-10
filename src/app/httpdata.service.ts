import { Injectable , Inject} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../post';
import {API_CONFIG} from './httpconfig/httpconfig.service';
import {HttpConfig} from './httpconfig/httpconfig';
@Injectable()
export class HttpdataService {

  constructor(private httpService :HttpClient) { }

  getData(){
    return this.httpService.get<Post[]>('http://jsonplaceholder.typicode.com/posts',
    {headers: new HttpHeaders().set('Token', 'This is token').set('AnotherToken', 'This is token 2')});
  }

  postData(post : Post){
    return this.httpService.post('http://jsonplaceholder.typicode.com/posts',post);
  }

}
