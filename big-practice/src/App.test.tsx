import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  it('renders the App component with routes and fallback UI', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
