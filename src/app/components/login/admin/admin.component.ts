import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    }

  )

  constructor( public router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  checkAdmin() {
    if(this.authService.adminCheck(this.loginForm.value.userName, this.loginForm.value.password)){
      this.router.navigate(['admin/dashboard']);
      this.authService.logIn();
    }
  }

  userLogout() {
    this.authService.loguot();
    this.router.navigate([''])
  }
}
