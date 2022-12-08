import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  })

  constructor( private customerService: CustomerService, public router:Router, public authServise: AuthService, private toast:NgToastService){ }

  ngOnInit(): void {
  }

  checkCustomer() {
    this.customerService.getCustomer(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe(response=>{
      if(response.data.auth){
        this.authServise.logIn();
        this.authServise.activeCustomerDetail = response.data.value
        this.toast.success({detail: "SUCCESS", summary: 'Log In Success', duration: 5000})
        this.router.navigate(['customer/dashboard'])
      }else {
        this.toast.error({detail: "ERROR", summary: 'Email Password Incorrect', duration: 5000})
      }
    });
  }
}
