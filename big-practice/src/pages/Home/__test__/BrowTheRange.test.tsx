import { render } from '@testing-library/react';
import { BrowTheRange } from '../components';

describe('BrowTheRange component', () => {
  it('should render component correctly', () => {
    const { container } = render(<BrowTheRange />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
