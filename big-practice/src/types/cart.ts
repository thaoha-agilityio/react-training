import { IProduct } from './product';

// Types for cart
export interface ICart {
  productId: string;
  quantity: number;
}

// Types for product in cart
export interface IProductCart extends IProduct, Omit<ICart, 'productId'> {}
