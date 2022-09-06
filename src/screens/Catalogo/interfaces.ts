export interface ITems {
    id: number;
    name: string;
    price: number;
    priceMember: number;
    priceNonMember: number;
    discount: number;
    image: string;
  }
 export interface IData {
    totalItems: number;
    items: ITems[];
  }