import { renderHook, waitFor, wrapper } from '@/utils';
import { useCreatePost, useGetPostsByAuthor, useLikePost } from '../usePost';

// Services
import { api } from '@/services';

// Mocks
import { POSTS } from '@/mocks';

describe('usePost hooks', () => {
  it('returns get data and other properties from useQuery', async () => {
    jest.spyOn(api, 'getData').mockResolvedValue(POSTS);

    const { result } = renderHook(() => useGetPostsByAuthor(), { wrapper });

    await waitFor(() => {
      expect(result.current.data).toEqual(POSTS);
      expect(result.current.isSuccess).toEqual(true);
    });
  });

  it('returns posts data and other properties from useMutation', async () => {
    jest.spyOn(api, 'postData').mockResolvedValue(POSTS[0]);

    const { result } = renderHook(() => useCreatePost(), { wrapper });
    result.current.mutate(POSTS[0]);

    await waitFor(() => {
      expect(result.current.data).toEqual(POSTS[0]);
      expect(result.current.isSuccess).toEqual(true);
    });
  });

  it('returns patch data and other properties from useMutation', async () => {
    jest.spyOn(api, 'patchData').mockResolvedValue(POSTS[0]);

    const { result } = renderHook(() => useLikePost(1), { wrapper });
    result.current.mutate({ likes: [1] });

    await waitFor(() => {
      expect(result.current.data).toEqual(POSTS[0]);
      expect(result.current.isSuccess).toEqual(true);
    });
  });
});
