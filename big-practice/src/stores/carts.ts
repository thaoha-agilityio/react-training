import { create } from 'zustand';

// Types
import { ICart } from '@types';
import { INITIAL_CART } from '@constants';

type CartState = {
  carts: ICart[];
  cart: ICart;
};

type CartActions = {
  setCarts: (carts: ICart[]) => void;
  setCart: (cart: ICart) => void;
};

export const useCartStore = create<CartState & CartActions>((set) => ({
  carts: [],
  cart: INITIAL_CART,
  setCarts: (carts: ICart[]) => {
    set({ carts });
  },
  setCart: (cart: ICart) => {
    set({ cart });
  },
}));
