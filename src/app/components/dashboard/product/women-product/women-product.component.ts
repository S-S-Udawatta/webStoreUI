import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../../service/product.service";
import {CartService} from "../../../../service/cart.service";

@Component({
  selector: 'app-women-product',
  templateUrl: './women-product.component.html',
  styleUrls: ['./women-product.component.scss']
})
export class WomenProductComponent implements OnInit{
  productList: any;
  searchKey: string = '';

  constructor(private productService:ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getByProductCategory('WOMEN').subscribe(res=>{
      this.productList=res.data.value

    })

    this.cartService.search.subscribe(value=>{
      this.searchKey = value;
    })
  }

}
