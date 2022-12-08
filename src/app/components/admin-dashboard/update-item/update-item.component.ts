import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {ProductDto} from "../../../dto/ProductDto";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent {

  updateItemGroup = new FormGroup({
    id: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required]),
    unitPrice: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
    tumbnail: new FormControl(null,[Validators.required])
  });

  constructor(private productService:ProductService, private toast:NgToastService) {
  }

  updateItem() {
    let Product = new ProductDto(
      this.updateItemGroup.get('id')?.value,
      this.updateItemGroup.get('name')?.value,
      this.updateItemGroup.get('description')?.value,
      this.updateItemGroup.get('unitPrice')?.value,
      this.updateItemGroup.get('category')?.value,
      this.updateItemGroup.get('thumbnail')?.value,

    );
    this.productService.updateProduct(Product).subscribe(response=>{
      this.updateItemGroup.reset()
      this.toast.success({detail: "SUCCESS", summary: 'Item Updated', duration: 1000})
    },error => {
      console.log(error)
    })

  }

  loadDetails() {
    let id:any = this.updateItemGroup.get('id')?.value
    this.productService.getProduct(id).subscribe(response=>{
      if(response != null){
        this.updateItemGroup.patchValue(
          {
            name: response.data.value.name,
            description: response.data.value.description,
            unitPrice: response.data.value.unitPrice,
            category: response.data.value.category,
            tumbnail: response.data.value.thumbnail
          }
        )
      }
    })

  }
}
