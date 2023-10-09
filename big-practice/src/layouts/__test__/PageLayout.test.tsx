import { render } from '@testing-library/react';

import PageLayout from '../PageLayout';

describe('PageLayout component', () => {
  it('should render with default props', () => {
    const { getByTestId } = render(<PageLayout data-testid='page-layout'>Content</PageLayout>);

    const pageLayout = getByTestId('page-layout');

    expect(pageLayout).toBeInTheDocument();
  });
});
