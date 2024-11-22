import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from '../model/products';
const apiUrl:string = 'http://localhost:3000/Products';
@Injectable({
  providedIn: 'root'
})
export class MasterService {
  

  private http:HttpClient=inject(HttpClient);
  getAllProducts():Observable<Products[]>{
    return this.http.get<Products[]>(apiUrl)
  }
  getAllCategory():Observable<string[]>{
    return this.http.get<string[]>(apiUrl+"/categories")
  }
  getProductById(id: string): Observable<Products> {
    return  this.http.get<Products>(`${apiUrl}?objectID=${id}`) ;
  }
  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}/${id}`);
  }
}
