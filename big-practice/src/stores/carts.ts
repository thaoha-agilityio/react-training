import { create } from 'zustand';

// Types
import { ICart } from '@types';

type CartState = {
  cart: ICart[];
};

type CartActions = {
  setCart: (carts: ICart[]) => void;
  deleteCart: (id: string) => void;
  addToCart: (id: string, count?: number) => void;
};

export const useCartStore = create<CartState & CartActions>()((set) => ({
  cart: [],
  setCart: (cart: ICart[]) => {
    set({ cart });
  },
  deleteCart: (productId: string) => {
    // Filter out the cart with the specified ID
    set((state) => ({
      cart: state.cart.filter((cart) => cart.productId !== productId),
    }));
  },
  addToCart: (id: string, count = 1) => {
    set((state) => {
      // Check if the product with the given id already exists in the cart
      const existedProductIndex = state.cart.findIndex((cart) => cart.productId === id);

      if (existedProductIndex !== -1) {
        const newCarts = [...state.cart];
        newCarts[existedProductIndex].quantity += count;

        return { cart: newCarts };
      }

      return { cart: [...state.cart, { productId: id, quantity: count }] };
    });
  },
}));
