import {ProductSortTypeEnum} from "../../../../../shared/models/enuns/product-sort-type.enum";
import {ViewTypeEnum} from "../../../../../shared/models/enuns/view-type.enum";

export interface HeaderListOptions {
  sortType: ProductSortTypeEnum;
  displayItemsPage: number;
  viewType: ViewTypeEnum;
}
