import { Component } from '@angular/core';
import {ProductDto} from "../../../dto/ProductDto";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../service/product.service";
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  addItemGroup = new FormGroup({
    id: new FormControl(null,[Validators.required]),
    name: new FormControl(null,[Validators.required]),
    description: new FormControl(null,[Validators.required]),
    unitPrice: new FormControl(null,[Validators.required]),
    category: new FormControl(null,[Validators.required]),
    tumbnail: new FormControl(null,[Validators.required])
  });

  constructor(private productService:ProductService, private toast:NgToastService) {
  }

  addItem() {
    let Product = new ProductDto(
      this.addItemGroup.get('id')?.value,
      this.addItemGroup.get('name')?.value,
      this.addItemGroup.get('description')?.value,
      this.addItemGroup.get('unitPrice')?.value,
      this.addItemGroup.get('category')?.value,
      this.addItemGroup.get('tumbnail')?.value,

    );
    this.productService.saveProduct(Product).subscribe(response=>{
      console.log(response)
    },error => {
      console.log(error)
    })
    this.addItemGroup.reset()
    this.toast.success({detail: "SUCCESS", summary: 'Item Added', duration: 1000})

  }
}
