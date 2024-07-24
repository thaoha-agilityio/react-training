import { renderWithRouterAndQuery } from '@/utils';

import Header from '..';

describe('Header Component', () => {
  it('Should render Header Component correctly', () => {
    const component = renderWithRouterAndQuery(<Header />);

    expect(component).toMatchSnapshot();
  });
});
