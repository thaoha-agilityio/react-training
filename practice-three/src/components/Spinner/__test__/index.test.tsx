import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Spinner } from '..';

describe('Testing component Spinner', () => {
  it('Should render a spinner with the correct styles', () => {
    render(<Spinner />);

    const spinner = screen.getByTestId('spinner');

    expect(spinner).toBeInTheDocument();
  });
});
