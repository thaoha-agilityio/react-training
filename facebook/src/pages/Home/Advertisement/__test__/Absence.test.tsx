import { render } from '@/utils';

// Component
import Advertisement from '..';

describe('Advertisement  Component', () => {
  it('Should render Advertisement Component correctly', () => {
    const component = render(<Advertisement />);

    expect(component).toMatchSnapshot();
  });
});
