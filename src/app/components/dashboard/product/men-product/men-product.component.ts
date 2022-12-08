import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../../service/product.service";
import {CartService} from "../../../../service/cart.service";

@Component({
  selector: 'app-men-product',
  templateUrl: './men-product.component.html',
  styleUrls: ['./men-product.component.scss']
})
export class MenProductComponent implements OnInit {
  productList: any;
  searchKey: string = '';

  constructor(private productService:ProductService ,private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getByProductCategory('MEN').subscribe(res=>{
      this.productList=res.data.value
    })

    this.cartService.search.subscribe(value=>{
      this.searchKey = value;
    })
  }


}
