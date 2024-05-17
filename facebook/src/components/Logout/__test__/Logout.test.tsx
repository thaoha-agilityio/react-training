import { render } from '@testing-library/react';

import Logout from '..';

const mockProps = {
  onLogout: jest.fn(),
};

describe('Logout Component', () => {
  it('Should render Logout Component correctly', () => {
    const component = render(<Logout onLogout={mockProps.onLogout} />);

    expect(component).toMatchSnapshot();
  });
});
