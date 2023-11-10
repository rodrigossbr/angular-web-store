export interface ProductFilterResponse {

  category: string;
  products: Array<
    {
      id: number,
      name: string;
      image: string;
    }>;
}
