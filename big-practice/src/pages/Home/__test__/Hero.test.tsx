import { render } from '@testing-library/react';
import { Hero } from '../components';

describe('Hero component', () => {
  it('should render component correctly', () => {
    const { container } = render(<Hero />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
