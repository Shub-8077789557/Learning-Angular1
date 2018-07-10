import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {User} from '../user';
import {Router} from '@angular/router';
import {MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user : User = new User();
  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {

  }

  login(){
    if(this.loginService.login(this.user)){
      this.router.navigate(['product']);
    }  
  }

}
