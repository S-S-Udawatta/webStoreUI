import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../../service/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit{
  customerList :any[]=[];

  constructor(private customerService:CustomerService) {
  }
  ngOnInit(): void {
    this.customerService.getCustomerList().subscribe(response=>{
      this.customerList = response.data.value
    })
  }


}
