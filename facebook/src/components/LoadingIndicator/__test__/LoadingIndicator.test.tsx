import { render } from '@/utils';

// Component
import LoadingIndicator from '..';

describe('LoadingIndicator  Component', () => {
  it('Should render LoadingIndicator Component correctly', () => {
    const component = render(<LoadingIndicator />);

    expect(component).toMatchSnapshot();
  });
});
