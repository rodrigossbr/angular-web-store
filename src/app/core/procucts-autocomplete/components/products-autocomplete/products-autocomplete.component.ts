import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {ProductsApiService} from "../../../../shared/api/services/products-api/products-api.service";
import {ProductFilterResponse} from "../../../../shared/api/models/product-filter.response";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-autocomplete',
  templateUrl: './products-autocomplete.component.html',
  styleUrls: ['./products-autocomplete.component.scss']
})
export class ProductsAutocompleteComponent implements OnInit {

  productsAutocomplete = new FormControl('');
  products: Array<ProductFilterResponse> = [];

  constructor(
    private service: ProductsApiService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.productsAutocomplete.valueChanges
      .subscribe(term => {
          this.findProducts(term)
      });
  }

  findProducts(term?: string | null) {
    this.service.getProductsFilter(term || '')
      .subscribe(products =>
        this.products = products);
  }

  openProduct(event: MatAutocompleteSelectedEvent) {

    this.router.navigateByUrl('/catalog');
  }
}
