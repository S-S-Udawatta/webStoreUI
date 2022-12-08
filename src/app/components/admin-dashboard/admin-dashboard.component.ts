import {Component, OnInit, TemplateRef} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ProductDto} from "../../dto/ProductDto";
import {Router} from "@angular/router";



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  active: any;

  constructor(private authService: AuthService,  private router: Router, ) { }

  ngOnInit(): void {

  }

  userLogout() {
    this.authService.loguot();
    this.router.navigate([''])
  }









}

