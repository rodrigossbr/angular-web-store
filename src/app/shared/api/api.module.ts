import { NgModule } from '@angular/core';
import {ProductsApiService} from "./services/products-api/products-api.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [
    ProductsApiService
  ]
})
export class ApiModule { }
