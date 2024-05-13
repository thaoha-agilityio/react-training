import { useMutation } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';

// Services
import { api } from '@/services';

// Constants
import { ROUTES } from '@/constants';

// Types
import { LoginPayload, LoginResponse, SignUpPayload, SignUpResponse } from '@/types';

// Stores
import { useAuthStore } from '@/stores';

// Utils
import { encryptAccessToken } from '@/utils';

//  Custom hook signup
export const useAuthSignUp = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  return useMutation<SignUpResponse, string, SignUpPayload>({
    mutationFn: async (payload: SignUpPayload) => await api.postData(ROUTES.SIGN_UP, payload),
    onSuccess: (res: LoginResponse) => {
      const { accessToken } = res || {};

      setAccessToken(encryptAccessToken(accessToken));
    },
  });
};

export const useAuthSignIn = () => {
  const [setAuthenticated, setAccessToken, setAuth] = useAuthStore(
    (state) => [state.setAuthenticated, state.setAccessToken, state.setAuth],
    shallow,
  );

  return useMutation<LoginResponse, string, LoginPayload>({
    mutationFn: async (payload: LoginPayload) => await api.postData(ROUTES.SIGN_IN, payload),
    onSuccess: (res: LoginResponse) => {
      const { accessToken, user } = res || {};

      setAuthenticated(true);
      setAccessToken(encryptAccessToken(accessToken));
      setAuth(user);
    },
  });
};
