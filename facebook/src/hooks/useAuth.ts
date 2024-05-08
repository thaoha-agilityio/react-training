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
  const [setAuthenticated, setAccessToken] = useAuthStore(
    (state) => [state.setAuthenticated, state.setAccessToken],
    shallow,
  );

  return useMutation<SignUpResponse, string, SignUpPayload>({
    mutationFn: async (payload: SignUpPayload) => await api.postData(ROUTES.SIGN_UP, payload),
    onSuccess: (res: LoginResponse) => {
      setAuthenticated(true);
      setAccessToken(encryptAccessToken(res.accessToken));
    },
  });
};

export const useAuthSignIn = () => {
  const [setAuthenticated, setAccessToken] = useAuthStore(
    (state) => [state.setAuthenticated, state.setAccessToken],
    shallow,
  );

  return useMutation<LoginResponse, string, LoginPayload>({
    mutationFn: async (payload: LoginPayload) => await api.postData(ROUTES.SIGN_IN, payload),
    onSuccess: (res: LoginResponse) => {
      setAuthenticated(true);
      setAccessToken(encryptAccessToken(res.accessToken));
    },
  });
};
