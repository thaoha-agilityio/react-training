import { create } from 'zustand';

// Types
import { IProduct } from '@types';

type ProductState = {
  products: IProduct[];
};

type ProductActions = {
  setProducts: (Products: IProduct[]) => void;
  addProduct: (value: IProduct) => void;
};

export const useProductStore = create<ProductState & ProductActions>((set, get) => ({
  products: [],
  setProducts: (products: IProduct[]) => {
    set({ products });
  },
  addProduct: (value: IProduct) => set(() => ({ products: [...get().products, value] })),
}));
