import { renderWithRouterAndQuery } from '@/utils';

// Constants

// Components
import Comment from '..';

const mockProps = {
  userName: 'Pam',
  content: 'Comment1',
  userId: 1,
  commentId: 2,
  likes: [],
};

describe('Comment Component', () => {
  it('Should render Comment Component correctly', () => {
    const component = renderWithRouterAndQuery(<Comment {...mockProps} />);

    expect(component).toMatchSnapshot();
  });
});
