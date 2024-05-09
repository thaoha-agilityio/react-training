import { createWithEqualityFn } from 'zustand/traditional';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
}

interface AuthStore extends AuthState {
  setAuthenticated: (isAuthenticated: boolean) => void;
  setAccessToken: (accessToken: string) => void;
  clearAuth: () => void;
}

const INITIAL_AUTH_STATE = {
  isAuthenticated: false,
  accessToken: '',
};

export const useAuthStore = createWithEqualityFn<AuthStore>()(
  persist<AuthStore>(
    (set) => ({
      ...INITIAL_AUTH_STATE,

      setAuthenticated: (isAuthenticated) => {
        set({ isAuthenticated });
      },

      setAccessToken: (accessToken) => {
        set({ accessToken });
      },

      clearAuth: () => {
        set({ ...INITIAL_AUTH_STATE });
      },
    }),
    { name: 'auth' },
  ),
);
