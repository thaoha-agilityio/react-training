import { renderWithRouterAndQuery } from '@/utils';

import Posts from '..';

// Servers
import { api } from '@/services';

// Mocks
import { POSTS } from '@/mocks';

// Hooks
import * as hooks from '@/hooks';

describe('Posts Component', () => {
  beforeEach(() => {
    jest.spyOn(api, 'getData').mockResolvedValue(POSTS);

    (jest.spyOn(hooks, 'useGetPostsByAuthor') as jest.Mock).mockImplementation(() => ({
      data: POSTS,
      isFetching: false,
    }));
  });
  it('Should render Posts  Component correctly', () => {
    const component = renderWithRouterAndQuery(<Posts />);

    expect(component).toMatchSnapshot();
  });
});
