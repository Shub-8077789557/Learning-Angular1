import { Injectable } from '@angular/core';
import {User} from './user';
@Injectable()
export class LoginService {
 isLogin : boolean;
  constructor() { }

  login(user:User){
 if(user.username==="Admin" && user.password==="Admin"){
   this.isLogin = true;
   return true;
 } else {
  this.isLogin = false;
   return false;
 }
  }

}
