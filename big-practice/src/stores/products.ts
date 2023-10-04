import { create } from 'zustand';

// Types
import { IProduct } from '@types';
import { INITIAL_PRODUCT } from '@constants';

type ProductState = {
  products: IProduct[];
  product: IProduct;
};

type ProductActions = {
  setProducts: (Products: IProduct[]) => void;
  setProduct: (Products: IProduct) => void;
  addProduct: (value: IProduct) => void;
};

export const useProductStore = create<ProductState & ProductActions>((set, get) => ({
  products: [],
  product: INITIAL_PRODUCT,
  setProducts: (products: IProduct[]) => {
    set({ products });
  },
  setProduct: (product: IProduct) => {
    set({ product });
  },
  addProduct: (value: IProduct) => set(() => ({ products: [...get().products, value] })),
}));
