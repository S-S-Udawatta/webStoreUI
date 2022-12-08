import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../service/product.service";

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.scss']
})
export class ManageItemComponent implements OnInit{

  productList: any;

  constructor(public productService:ProductService) {
  }

  ngOnInit(): void {
    this.productService.listProduct().subscribe(response=>{
      this.productList = response.data.value
    })
  }

  deleteItem(id:any) {
    this.productService.deleteItem(id).subscribe(response=>{
      console.log(response)
    },error=>{
      console.log(error)
    })
  }
}
