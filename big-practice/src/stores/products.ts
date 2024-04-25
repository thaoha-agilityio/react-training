import { create } from 'zustand';

// Types
import { IProduct } from '@types';

type ProductState = {
  products: IProduct[];
};

type ProductActions = {
  setProducts: (Products: IProduct[]) => void;
};

export const useProductStore = create<ProductState & ProductActions>((set) => ({
  products: [],
  setProducts: (products: IProduct[]) => {
    set({ products });
  },
}));
