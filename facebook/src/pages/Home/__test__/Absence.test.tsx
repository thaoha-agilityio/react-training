import { render } from '@/utils';

// Component
import Absence from '../Absence';

describe('Absence  Component', () => {
  it('Should render Absence  Component correctly', () => {
    const component = render(<Absence />);

    expect(component).toMatchSnapshot();
  });
});
