import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

//Constants
import { DATA_CRUMBS } from '@constants';

// Component
import Banner from '../index';

const bannerProps = {
  title: 'Shop',
  crumbs: DATA_CRUMBS,
};

describe('Banner Component', () => {
  it('displays the title correctly', () => {
    const { getByTestId } = render(
      <Router>
        <Banner {...bannerProps} />
      </Router>,
    );

    const titleElement = getByTestId('title');
    expect(titleElement).toHaveTextContent(bannerProps.title);
  });

  it('displays the breadcrumb correctly', () => {
    const { getByTestId } = render(
      <Router>
        <Banner {...bannerProps} />
      </Router>,
    );
    const titleElement = getByTestId('breadcrumb-item');
    expect(titleElement.textContent).toEqual('Edit Product');
  });
});
