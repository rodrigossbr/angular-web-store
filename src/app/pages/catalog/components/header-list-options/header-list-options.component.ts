import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {productSortTypeDefs, ProductSortTypeEnum} from '../../../../shared/models/enuns/product-sort-type.enum';
import {ViewTypeEnum, viewTypesDefs} from '../../../../shared/models/enuns/view-type.enum';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HeaderListOptions} from './models/header-list-options.model';

@Component({
  selector: 'app-header-list-options',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSelectModule, MatButtonModule, MatButtonToggleModule, MatListModule, MatTooltipModule],
  templateUrl: './header-list-options.component.html',
  styleUrl: './header-list-options.component.scss'
})
export class HeaderListOptionsComponent {

  protected readonly productSortTypeDefs = productSortTypeDefs;
  protected readonly viewTypesDefs = viewTypesDefs;
  protected readonly ViewTypeEnum = ViewTypeEnum;

  @Input()
  totalItems: number = 0;

  @Output()
  optionsChange = new EventEmitter<HeaderListOptions>();

  sortTypesOptions = Object.values(ProductSortTypeEnum);
  displayItemsPageTypesOptions = [20, 40, 60, 80, 100];

  options: HeaderListOptions = {
    sortType: ProductSortTypeEnum.MOST_RATED,
    displayItemsPage: 20,
    viewType: ViewTypeEnum.GRID
  };

  listOptionsChange() {
    this.optionsChange.emit(this.options);
  }
}
