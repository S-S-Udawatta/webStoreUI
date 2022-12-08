import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../service/cart.service";
import {CustomerService} from "../../../service/customer.service";
import {ProductService} from "../../../service/product.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(public cartService: CartService, public router:Router) {
  }

  deleteItem(item : any){
    this.cartService.removeCartItem(item);
  }


  back() {
    window.history.back();
  }

  ngOnInit(): void {

  }

  addItem( item: any) {
    this.cartService.addToCart(item)
  }

  dropItem( item: any) {
    this.cartService.dropFromCart(item)
  }

  getGrandTotal(){
    return this.cartService.getGrandTotal()
  }

  emptyCart() {
    this.cartService.emptyCart()
  }
}

