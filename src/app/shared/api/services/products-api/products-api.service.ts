import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";
import {ProductFilterResponse} from "../../models/product-filter.response";
import {ProductListResponse} from "../../models/product-list.response";

@Injectable()
export class ProductsApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProducts() {
    return this.httpClient.get<Array<ProductListResponse>>(`${environment.apiUrl}/products`);
  }

  getProductsFilter(term?: string) {
    return this.httpClient.get<Array<ProductFilterResponse>>(`${environment.apiUrl}/products/filter/${term}`);
  }
}
