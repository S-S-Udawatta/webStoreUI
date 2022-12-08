import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../service/product.service";
import {CartService} from "../../../../service/cart.service";

@Component({
  selector: 'app-allproduct',
  templateUrl: 'all-product.component.html',
  styleUrls: ['all-product.component.scss']
})
export class AllProductComponent implements OnInit {

  productList: any;
  searchKey: string = ''


  constructor(private productService:ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.listProduct().subscribe(res=>{
      this.productList=res.data.value;
    })

    this.cartService.search.subscribe(value=>{
      this.searchKey = value;
    })
  }

  addToCart(item:any) {
    this.cartService.addToCart(item)
  }

}
