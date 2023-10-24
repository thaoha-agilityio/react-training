import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { PLACEHOLDER_MESSAGE } from '@constants';
import Footer from '../index';

describe('Footer Component', () => {
  it('renders the footer correctly', () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Router>
        <Footer />
      </Router>,
    );

    const headingElement = getByText('Furniro.');
    expect(headingElement).toBeInTheDocument();

    const newsletterInput = getByPlaceholderText(PLACEHOLDER_MESSAGE.NEWSLETTER);
    const subscribeLink = getByText('SUBSCRIBE');
    expect(newsletterInput).toBeInTheDocument();
    expect(subscribeLink).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
