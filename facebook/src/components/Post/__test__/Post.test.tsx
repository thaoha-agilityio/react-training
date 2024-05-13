import { render } from '@testing-library/react';

// Constants
import { POSTS } from '@/mocks';

// Components
import Post from '..';

describe('Post Component', () => {
  it('Should render Post Component correctly', () => {
    const component = render(<Post post={POSTS[0]} userName='Pam' />);

    expect(component).toMatchSnapshot();
  });
});
