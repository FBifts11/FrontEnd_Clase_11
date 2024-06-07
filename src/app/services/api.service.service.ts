import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private url = 'https://fakestoreapi.com/products'
  
  private _httpClient = inject(HttpClient)
  
  constructor() { }

  public getAllProducts(): Observable<IProduct[]> {
    return this._httpClient.get<IProduct[]>(this.url)
 }

 public getProductSort(sort: string): Observable<IProduct[]> {
  return this._httpClient.get<IProduct[]>(`${this.url}?sort=${sort}`)
 }

 public getProductByid(id:number | string): Observable <IProduct> {
  return this._httpClient.get<IProduct>(`${this.url}/${id}`)
 }

 public newProduct(product: IProduct): Observable<IProduct> {
  return this._httpClient.post<IProduct>(`${this.url}`, product)
 }

 public updateProduct(id: number | string, product: IProduct):Observable<IProduct> {
  return this._httpClient.put<IProduct>(`${this.url}/${id}`, product)
 }

 public deleteProduct(id: number | string):Observable<IProduct> {
  return this._httpClient.delete<IProduct>(`${this.url}/${id}`)
 }

}
