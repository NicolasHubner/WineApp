export interface ITems {
  id: number;
  name: string;
  price: number;
  priceMember: number;
  priceNonMember: number;
  discount: number;
  image: string;
  flag: string;
  type: string;
  size: string;
  sommelierComment: string;
  country: string;
  classification: string;
  volume: string;

}
export interface IData {
  totalItems: number;
  items: ITems[];
}

export interface INavigation {
  navigate: Function
}