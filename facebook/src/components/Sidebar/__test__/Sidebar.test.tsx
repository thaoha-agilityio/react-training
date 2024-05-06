import { render } from '@testing-library/react';

// Components
import Sidebar from '..';

describe('Sidebar Component', () => {
  it('Should render Sidebar Component correctly', () => {
    const component = render(<Sidebar userName='Pam' />);

    expect(component).toMatchSnapshot();
  });
});
