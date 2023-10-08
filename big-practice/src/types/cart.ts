import { IProduct } from './product';

// Types for cart
export interface ICart extends IProduct {
  quantity: number;
}
