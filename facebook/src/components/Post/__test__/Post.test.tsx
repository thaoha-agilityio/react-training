import { renderWithRouterAndQuery } from '@/utils';

// Constants
import { POSTS } from '@/mocks';

// Components
import Post from '..';

const mockProps = {
  isModal: false,
  post: POSTS[0],
  onShowComment: jest.fn(),
};

describe('Post Component', () => {
  it('Should render Post Component correctly', () => {
    const component = renderWithRouterAndQuery(<Post {...mockProps} />);

    expect(component).toMatchSnapshot();
  });
});
