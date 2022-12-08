import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDto} from "../dto/ProductDto";



@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private http:HttpClient) { }

  saveProduct(product:ProductDto):Observable<any>{
    return this.http.post('http://localhost:3000/api/v1/admin/add',{
      id: product.id,
      name: product.name,
      description: product.description,
      unitPrice: product.unitPrice,
      category: product.category,
      thumbnail: product.thumbnail
    })
  }

  getProduct(id:string):Observable<any>{
    return this.http.get(`http://localhost:3000/api/v1/admin/get`, {headers: new HttpHeaders({id})});

  }

  listProduct():Observable<any>{
    return this.http.get(`http://localhost:3000/api/v1/admin/list`)
  }

  getByProductCategory(category:any):Observable<any>{
    return this.http.get(`http://localhost:3000/api/v1/admin/category`,{headers: new HttpHeaders({category})});
  }

  updateProduct(Product: ProductDto) {
    return this.http.put(`http://localhost:3000/api/v1/admin/update`,{
      id: Product.id,
      name: Product.name,
      description: Product.description,
      unitPrice: Product.unitPrice,
      category: Product.category,
      thumbnail: Product.thumbnail
    })

  }

  deleteItem(id:any) {
    return this.http.delete(`http://localhost:3000/api/v1/admin/delete`,{headers: new HttpHeaders({id})})
  }
}
