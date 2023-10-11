import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
import { ICart } from '@types';

//  Constants
import { CART_STORE } from '@constants';

type CartState = {
  cart: ICart[];
};

type CartActions = {
  setCart: (carts: ICart[]) => void;
  deleteCart: (id: string) => void;
};

export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set) => ({
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
    }),
    {
      name: CART_STORE, // name of the item in the storage
    },
  ),
);
