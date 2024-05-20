import { renderHook, waitFor, wrapper } from '@/utils';

// Hooks
import { useLikeComment } from '../useComment';

// Services
import { api } from '@/services';

// Mocks
import { COMMENTS } from '@/mocks';

describe('useComment hooks', () => {
  it('returns patch data and other properties from useMutation', async () => {
    jest.spyOn(api, 'patchData').mockResolvedValue(COMMENTS[0]);

    const { result } = renderHook(() => useLikeComment(1), { wrapper });
    result.current.mutate({ likes: [2] });

    await waitFor(() => {
      expect(result.current.data).toEqual(COMMENTS[0]);
      expect(result.current.isSuccess).toEqual(true);
    });
  });
});
