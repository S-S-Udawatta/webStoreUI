import { Injectable } from '@angular/core';
import {SignupComponent} from "../components/signup/signup.component";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly adminUserName : string = 'admin';
  readonly adminPassword : string = 'admin';

  public activeCustomerDetail : any ;

  loggedIn : boolean = false

  constructor() { }

  loguot() {
    this.loggedIn = false;

  }

  logIn(){
    this.loggedIn = true;
  }


  adminCheck(userName: any, password: any) {
    if(this.adminUserName==userName && this.adminPassword==password){
      return true
    }
    return false;
  }
}
