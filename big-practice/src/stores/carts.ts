import { create } from 'zustand';

// Types
import { ICart } from '@types';

type CartState = {
  cart: ICart[];
};

type CartActions = {
  setCart: (carts: ICart[]) => void;
  deleteCart: (id: string) => void;
};

export const useCartStore = create<CartState & CartActions>()((set) => ({
  cart: [],
  setCart: (cart: ICart[]) => {
    set({ cart });
  },
  deleteCart: (cartId: string) => {
    // Filter out the cart with the specified ID
    set((state) => ({
      cart: state.cart.filter((cart) => cart.id !== cartId),
    }));
  },
}));
