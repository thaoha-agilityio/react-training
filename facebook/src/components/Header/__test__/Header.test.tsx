import { render } from '@/utils';

import Header from '..';

describe('Header Component', () => {
  it('Should render Header Component correctly', () => {
    const component = render(<Header />);

    expect(component).toMatchSnapshot();
  });
});
