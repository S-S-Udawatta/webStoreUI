import { Component, OnInit } from '@angular/core';
import {SocialAuthService} from "@abacritt/angularx-social-login";
import {FormGroup, FormControl, Validators, FormGroupDirective, NgForm} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {CustomerDto} from "../../dto/CustomerDto";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  saveForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required]),
  })

  public user: any;
  loggedIn:any;

  constructor(
    private socialAuthService:SocialAuthService,
    private customerService: CustomerService,
    public router:Router,
    private authService: AuthService,
    private toast: NgToastService

  ) { }

  ngOnInit(): void {

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if(this.loggedIn){
        this.customerService.getCustomer(this.user.email,this.user.id).subscribe(response=>{
          if(!response.data.auth){

            let googleCustomer = new CustomerDto(
              this.user.name,
              this.user.email,
              this.user.id
            );
            this.customerService.saveCustomer(googleCustomer).subscribe(response=>{
              this.authService.logIn();
              this.authService.activeCustomerDetail = response.data.value
              this.toast.success({detail: "SUCCESS", summary: 'Sign Up Success', duration: 2000})
              this.router.navigate(['customer/dashboard'])
            },error => {
              console.log(error)
            },);
          }else {
            this.authService.logIn()
            this.authService.activeCustomerDetail = response.data.value
            this.toast.success({detail: "SUCCESS", summary: 'Log In Success', duration: 2000})
            this.router.navigate(['customer/dashboard'])

          }
        })


      }

    });
  }


  saveCustomer() {
    this.customerService.getCustomer(this.saveForm.get('email')?.value,this.saveForm.get('password')?.value).subscribe(response=>{
      if(!response.data.auth){

        let Customer = new CustomerDto(
          this.saveForm.get('name')?.value,
          this.saveForm.get('email')?.value,
          this.saveForm.get('password')?.value
        );
        this.customerService.saveCustomer(Customer).subscribe(response=>{
          this.authService.logIn();
          this.authService.activeCustomerDetail = response.data.value
          this.router.navigate(['customer/dashboard'])
          this.toast.success({detail: "SUCCESS", summary: 'Sign Up Success', duration: 2000})

        },error => {
          console.log(error);
        })
      }else {
        this.toast.warning({detail: "EXISTS", summary: 'Account Already Exists', duration: 2000})
      }
    })

  }

}




