import {Component, OnInit} from '@angular/core';
import {ProductsApiService} from '../../../../shared/api/services/products-api/products-api.service';
import {Router} from '@angular/router';
import {ProductListResponse} from '../../../../shared/api/models/product-list.response';


@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss']
})
export class CatalogPageComponent implements OnInit {

  products: Array<ProductListResponse> = [];

  constructor(
    private service: ProductsApiService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.service.getProducts()
      .subscribe(products => this.products = products);
  }

}
