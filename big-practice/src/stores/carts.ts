import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Types
import { ICart } from '@types';

//  Constants
import { CART_STORE } from '@constants';

type CartState = {
  carts: ICart[];
};

type CartActions = {
  setCarts: (carts: ICart[]) => void;
  deleteCart: (id: string) => void;
};

export const useCartStore = create<CartState & CartActions>()(
  persist(
    (set) => ({
      carts: [],
      setCarts: (carts: ICart[]) => {
        set({ carts });
      },
      deleteCart: (cartId: string) => {
        // Filter out the cart with the specified ID
        set((state) => ({
          carts: state.carts.filter((cart) => cart.id !== cartId),
        }));
      },
    }),
    {
      name: CART_STORE, // name of the item in the storage
    },
  ),
);
