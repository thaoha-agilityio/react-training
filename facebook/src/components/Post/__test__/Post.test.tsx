import { renderWithRouterAndQuery } from '@/utils';

// Constants
import { POSTS } from '@/mocks';

// Components
import Post from '..';

describe('Post Component', () => {
  it('Should render Post Component correctly', () => {
    const onLikePost = jest.fn();
    const component = renderWithRouterAndQuery(<Post post={POSTS[0]} onLikePost={onLikePost} />);

    expect(component).toMatchSnapshot();
  });
});
