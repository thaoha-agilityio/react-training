import { renderWithRouterAndQuery } from '@helpers';

import { OurProducts } from '../components';

describe('OurProducts component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<OurProducts />);

    expect(container).toBeInTheDocument();
  });
});
