import { fireEvent, renderWithRouterAndQuery } from '@/utils';

// Constants

// Components
import Comment from '..';

const mockProps = {
  userName: 'Pam',
  content: 'Comment1',
  currentUser: 1,
  commentId: 2,
  likes: [],
  onLikeComment: jest.fn(),
};

describe('Comment Component', () => {
  it('Should render Comment Component correctly', () => {
    const component = renderWithRouterAndQuery(<Comment {...mockProps} />);

    expect(component).toMatchSnapshot();
  });

  it('Should be handleLikeComment is called', () => {
    const { getByText } = renderWithRouterAndQuery(<Comment {...mockProps} />);

    const likeBtn = getByText('like');
    fireEvent.click(likeBtn);

    expect(mockProps.onLikeComment).toHaveBeenCalled();
  });

  it('Should be handleLikeComment is called', () => {
    const { getByText } = renderWithRouterAndQuery(<Comment {...mockProps} likes={[2]} />);

    const likeBtn = getByText('like');
    fireEvent.click(likeBtn);

    expect(mockProps.onLikeComment).toHaveBeenCalled();
  });
});
