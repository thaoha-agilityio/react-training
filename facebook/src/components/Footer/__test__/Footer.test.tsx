import { render } from '@testing-library/react';

import Footer from '..';

describe('Footer Component', () => {
  it('Should render Footer Component correctly', () => {
    const component = render(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
