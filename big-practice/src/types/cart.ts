import { IProduct } from './product';

// Types for cart
export interface ICart {
  cartId: string;
  productId: string;
  quantity: number;
}

export interface IProductCart extends IProduct, ICart {}
