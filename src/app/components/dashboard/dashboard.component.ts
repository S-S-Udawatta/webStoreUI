import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  active: any;
  public  searchItem: string =''

  constructor(private authService:AuthService, private router:Router, public cartService:CartService) { }

  ngOnInit(): void {
  }

  search(event : any){
    this.searchItem = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchItem);
  }
  userLogout() {
    this.authService.loguot();
    this.router.navigate([''])
  }

}

@Component({
  selector: 'ngbd-nav-basic',
  templateUrl: 'dashboard.component.html',
})
export class NgbdNavBasic {
  active = 1;
  searchItem : string = '';


  constructor(public cartService: CartService) {
  }


  search(event : any){

  }
  userLogout(){

  }
}
