import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../../service/order.service";
import {OrderDto} from "../../dto/OrderDto";
import {AuthService} from "../../service/auth.service";
import {NgToastService} from "ng-angular-popup";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  constructor(public cartService: CartService, public orderService:OrderService,private router:Router, private authService: AuthService,private toast: NgToastService) {
  }

  list: any [] =[]
  paymentForm = new FormGroup({
      address: new FormControl(null, [Validators.required]),
      contact: new FormControl(null, [Validators.required])
    }
  )


  placeOrder() {
    let order =new OrderDto(
      this.authService.activeCustomerDetail,
      this.cartService.cartList,
      this.cartService.getGrandTotal(),
      this.paymentForm.get('address')?.value,
      this.paymentForm.get('contact')?.value,
      new Date()
    )
    this.orderService.placeOder(order).subscribe(response=>{
      this.toast.success({detail: "SUCCESS", summary: 'Order Placed', duration: 3000})
      this.router.navigate(['customer/dashboard'])
      this.cartService.cartList = []
    })
  }




  getCartList(){
    return this.cartService.cartList
  }

  ngOnInit(): void {
  }

  back() {
    window.history.back()
  }
}
