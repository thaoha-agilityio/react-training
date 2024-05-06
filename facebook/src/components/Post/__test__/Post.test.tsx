import { render } from '@testing-library/react';

// Constants
import { DEFAULT_IMAGE } from '@/constants';

// Components
import Post from '..';

describe('Post Component', () => {
  it('Should render Post Component correctly', () => {
    const component = render(
      <Post userName='Pam' content='Content marketing definition' image={DEFAULT_IMAGE} />,
    );

    expect(component).toMatchSnapshot();
  });
});
