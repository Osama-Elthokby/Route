import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private grollmusUrl = 'api/grollmus';

  constructor(private http: HttpClient) { }

  /**
   * Gets product
   * @param id
   * @returns product
   */
  getProduct(id: any): Observable<any> {
    if (!id) {
      return of();
    }
    const url = `${this.grollmusUrl}/${id}`;
    return this.http.get<any>(url)
  }
  /**
   * Gets products
   * @returns products
   */
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.grollmusUrl)
  }
  /**
   * Adds product
   * @param product
   * @returns product
   */
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.grollmusUrl, product)
  }
  /**
   * Deletes product
   * @param id
   * @returns product
   */
  deleteProduct(id: number): Observable<any> {
    const url = `${this.grollmusUrl}/${id}`;
    return this.http.delete<any>(url)
  }




}
