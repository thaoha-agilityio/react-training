import { create } from 'zustand';

export interface StoresType {
  successMessage: string;
  errorMessage: string;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
}

export const useMessageStores = create<StoresType>((set) => ({
  successMessage: '',
  errorMessage: '',
  setSuccessMessage: (message: string) => set(() => ({ successMessage: message })),
  setErrorMessage: (message: string) => set(() => ({ errorMessage: message })),
}));
