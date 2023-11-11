export enum ProductSortTypeEnum {
  CHOICE = 'choice',
  RISING_PRICE = 'rising-price',
  DECREASING_PRICE = 'decreasing-price',
  MOST_RATED = 'most-rated',
  MOST_RECENT = 'most-recent',
  MOST_WANTED = 'most-wanted',
  MANUFACTURER = 'manufacturer',
  PROMOTIONS = 'promotions'
}

export const productSortTypeDefs = {
  [ProductSortTypeEnum.CHOICE]: 'Escolha',
  [ProductSortTypeEnum.RISING_PRICE]: 'Preço crescente',
  [ProductSortTypeEnum.DECREASING_PRICE]: 'Preço decrescente',
  [ProductSortTypeEnum.MOST_RATED]: 'Mais avaliados',
  [ProductSortTypeEnum.MOST_RECENT]: 'Mais recentes',
  [ProductSortTypeEnum.MOST_WANTED]: 'Mais procurados',
  [ProductSortTypeEnum.MANUFACTURER]: 'Fabricante',
  [ProductSortTypeEnum.PROMOTIONS]: 'Promotions'
};
