import { renderWithRouterAndQuery } from '@/utils';

// Component
import SignInPage from '..';

describe('SignInPage Component', () => {
  it('Should render SignInPage  Component correctly', () => {
    const component = renderWithRouterAndQuery(<SignInPage />);

    expect(component).toMatchSnapshot();
  });
});
