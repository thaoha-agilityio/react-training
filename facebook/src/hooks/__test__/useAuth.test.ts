import { act, renderHook, waitFor, wrapper } from '@/utils';

// Apis
import { useAuthSignUp, useAuthSignIn } from '../useAuth';

// Services
import { api } from '@/services';

// Mocks
import { LOGIN_PAYLOAD, LOGIN_RESPONSE, SIGNUP_PAYLOAD, SIGNUP_RESPONSE } from '@/mocks';

describe('useAuthLogin', () => {
  it('sets the authenticated state and access token on successful login', async () => {
    const loginResponse = {
      data: LOGIN_RESPONSE,
      status: 200,
      statusText: 'OK',
      config: {},
    };
    jest.spyOn(api, 'postData').mockResolvedValue(loginResponse);

    const { result } = renderHook(() => useAuthSignIn(), { wrapper });

    await act(async () => {
      await result.current.mutateAsync(LOGIN_PAYLOAD);
    });

    await waitFor(() => {
      const { isError, isLoading, isSuccess } = result.current;

      expect(isError).toBe(false);
      expect(isLoading).toBe(false);
      expect(isSuccess).toBe(true);
    });
  });
  it('returns the sign up success', async () => {
    const loginResponse = {
      data: SIGNUP_RESPONSE,
      status: 200,
      statusText: 'OK',
      config: {},
    };
    jest.spyOn(api, 'postData').mockResolvedValue(loginResponse);

    const { result } = renderHook(() => useAuthSignUp(), { wrapper });

    await act(async () => {
      await result.current.mutateAsync(SIGNUP_PAYLOAD);
    });

    await waitFor(() => {
      const { isError, isLoading, isSuccess } = result.current;

      expect(isError).toBe(false);
      expect(isLoading).toBe(false);
      expect(isSuccess).toBe(true);
    });
  });
});
