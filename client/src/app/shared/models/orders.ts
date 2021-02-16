import { IAddress } from './addresss';

export interface IOrderToCreate {
  basketId: string;
  deliveryMethodId: number;
  shipToAddress: IAddress;
}

export interface IOrder {
  buyerEmail: string;
  orderDate: string;
  shipToAddress: IAddress;
  shippingPrice: number;
  deliveryMethod: string;
  total: number;
  orderItems: IOrderItem[];
  subtotal: number;
  status: number;
  paymentIntentId: string;
  id: number;
}

export interface IOrderItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
}
