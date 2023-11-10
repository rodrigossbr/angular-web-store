import {Component, Input} from '@angular/core';
import {ProductListResponse} from "../../../../shared/api/models/product-list.response";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input()
  product!: ProductListResponse;

}
