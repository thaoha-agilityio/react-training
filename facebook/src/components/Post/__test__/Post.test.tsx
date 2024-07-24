import { fireEvent, renderWithRouterAndQuery } from '@/utils';

// Constants
import { POSTS } from '@/mocks';

// Components
import Post from '..';

const mockProps = {
  post: POSTS[0],
  onLikePost: jest.fn(),
  onShowComment: jest.fn(),
};

describe('Post Component', () => {
  it('Should render Post Component correctly', () => {
    const component = renderWithRouterAndQuery(<Post {...mockProps} />);

    expect(component).toMatchSnapshot();
  });

  it('Should be handleLikeComment is called', () => {
    const { getByText } = renderWithRouterAndQuery(<Post {...mockProps} />);

    const likeBtn = getByText('Like');
    fireEvent.click(likeBtn);

    expect(mockProps.onLikePost).toHaveBeenCalled();
  });

  it('Should be onShowComment is called', () => {
    const { getByText } = renderWithRouterAndQuery(<Post {...mockProps} />);

    const likeBtn = getByText('Comment');
    fireEvent.click(likeBtn);

    expect(mockProps.onShowComment).toHaveBeenCalledTimes(1);
  });
});
