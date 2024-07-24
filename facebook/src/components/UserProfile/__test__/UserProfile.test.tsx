import { render } from '@testing-library/react';

import UserProfile from '..';

describe('UserProfile  Component', () => {
  it('Should render UserProfile  Component correctly', () => {
    const component = render(<UserProfile userName='Pam' />);

    expect(component).toMatchSnapshot();
  });
});
