import { renderHook, waitFor, wrapper } from '@/utils';
import { useGetPostsByAuthor } from '../usePost';

// Services
import { api } from '@/services';
import { POSTS } from '@/mocks';

describe('usePost hooks', () => {
  it('returns posts data and other properties from useQuery', async () => {
    jest.spyOn(api, 'getData').mockResolvedValue(POSTS);

    const { result } = renderHook(() => useGetPostsByAuthor(), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(POSTS);
      expect(result.current.isSuccess).toEqual(true);
    });
  });
});
