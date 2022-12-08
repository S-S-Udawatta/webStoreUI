import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderDto} from "../dto/OrderDto";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  placeOder(order:OrderDto):Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/order/place',{
      customer:order.customer,
      items:order.items,
      total:order.total,
      address:order.address,
      contact:order.contact,
      date:order.date
    })
  }

  getOrderList():Observable<any>{
    return this.http.get('http://localhost:3000/api/v1/order/list')
  }
}
