import { render } from '@testing-library/react';

// Components
import ErrorBoundary from '..';

describe('Testing ErrorBoundary class', () => {
  it('Should render children when there is no error', () => {
    const { container, getByText } = render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <div>Content</div>
      </ErrorBoundary>,
    );
    expect(getByText('Content')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('Should render fallback when there is an error', () => {
    const ChildComponentWithError = ({ error }: { error: Error }) => {
      throw error;
    };
    const error = new Error('Test error');
    const { getByText } = render(
      <ErrorBoundary fallback={<div>Error occurred</div>}>
        <ChildComponentWithError error={error} />
      </ErrorBoundary>,
    );
    expect(getByText('Error occurred')).toBeInTheDocument();
  });
});
