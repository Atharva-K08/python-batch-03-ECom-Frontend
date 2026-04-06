import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  getProductCategories() {
    return this.http.get(this.baseUrl + 'categories/');
  }
  getProductSubCategories() {
    return this.http.get(this.baseUrl + 'subcategories/');
  }
  getProducts() {
    return this.http.get(this.baseUrl + 'products/');
  }
}
