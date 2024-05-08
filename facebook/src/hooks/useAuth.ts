import { useMutation } from '@tanstack/react-query';

// Services
import { api } from '@/services';

// Constants
import { ROUTES } from '@/constants';

// Types
import { SignUpPayload, SignUpResponse } from '@/types';

//  Custom hook signup
export const useAuthSignUp = () => {
  return useMutation<SignUpResponse, string, SignUpPayload>({
    mutationFn: async (payload: SignUpPayload) => await api.postData(ROUTES.SIGN_UP, payload),
  });
};
