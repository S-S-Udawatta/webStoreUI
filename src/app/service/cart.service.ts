import { Injectable } from '@angular/core';
import {ProductService} from "./product.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList :any= []
  public  search = new BehaviorSubject<string>('')
  private a: any;

  constructor(private product:ProductService) { }

  addToCart(item:any) {
    const index : number = this.cartList.indexOf(item)
    if(index == -1){
      item.qty=1
      this.cartList.push(item)
    }else {
      this.cartList[index].qty = this.cartList[index].qty + 1
    }
  }

  removeCartItem(item: any) {
    const index: number = this.cartList.indexOf(item);
    this.cartList.splice(index,1);
  }

  dropFromCart(item: any) {
    const index: number = this.cartList.indexOf(item);
    this.cartList[index].qty = this.cartList[index].qty - 1;
  }

  getGrandTotal() {
    let grandTotal: number= 0
    for (const value in this.cartList) {
      grandTotal = grandTotal + this.cartList[value].unitPrice * this.cartList[value].qty
    }
    return grandTotal
  }

  emptyCart() {
    this.cartList = []
  }
}

