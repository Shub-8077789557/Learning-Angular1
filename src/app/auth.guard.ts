import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from './login.service';
import {Router} from '@angular/router'; 
import {User} from './user';

@Injectable()

export class AuthGuard implements CanActivate{
  user : User;
  constructor(private loginService : LoginService, private router : Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.loginService.isLogin){
        return true;
      }else{
        this.router.navigate(['login']);
        return false;
      }
     
  }
}
