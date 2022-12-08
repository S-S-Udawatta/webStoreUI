import { Pipe, PipeTransform } from '@angular/core';
import {ProductService} from "../product.service";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  private result: any;

  constructor(private productService: ProductService) {
  }

  transform(value: any[], filterString: string, propertyName: string) {


    this.productService.listProduct().subscribe(response => {
      value = response
    })
    if (!value || filterString === '' || propertyName === '') {
      return value;
    }

    return value.filter(value => {
      if (value && value[propertyName]) {
        return value[propertyName].toLowerCase().includes(filterString.toLowerCase())
      }
      return false
    })
  }
}
