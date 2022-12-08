import { Injectable } from '@angular/core';
import {CustomerDto} from "../dto/CustomerDto";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {



  constructor(private http: HttpClient) { }

  saveCustomer(customer:CustomerDto):Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/customer/save',{
      name:customer.name,
      email:customer.email,
      password:customer.password
    })
  }

  getCustomer(email:any, password:any):Observable<any>{
    return this.http.get(`http://localhost:3000/api/v1/customer/get`, {headers: new HttpHeaders({email,password})});

  }
  getCustomerByID(email:any):Observable<any>{
    return this.http.get(`http://localhost:3000/api/v1/customer/get/id`, {headers: new HttpHeaders({email})});

  }
  getCustomerList():Observable<any>{
    return this.http.get(`http://localhost:3000/api/v1/customer/list` );

  }


}
