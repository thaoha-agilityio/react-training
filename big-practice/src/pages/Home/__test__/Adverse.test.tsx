import { render } from '@testing-library/react';
import { Adverse } from '../components';

describe('Adverse component', () => {
  it('should render component correctly', () => {
    const { container } = render(<Adverse />);

    expect(container).toBeInTheDocument();
  });
});
