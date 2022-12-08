import {Component, OnInit} from '@angular/core';
import {OrderService} from "../../../service/order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  orderList :any[] = []

  constructor(private orderService:OrderService) {
  }
  ngOnInit(): void {
    this.orderService.getOrderList().subscribe(response=>{
      this.orderList = response.data.value
    })
  }
}


