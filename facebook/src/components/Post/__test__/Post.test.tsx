import { render } from '@testing-library/react';

// Constants
import { POSTS } from '@/mocks';

// Components
import Post from '..';

describe('Post Component', () => {
  it('Should render Post Component correctly', () => {
    const onLikePost = jest.fn();
    const component = render(<Post post={POSTS[0]} onLikePost={onLikePost} />);

    expect(component).toMatchSnapshot();
  });
});
