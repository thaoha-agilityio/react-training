import { render } from '@testing-library/react';

import Input from '..';

describe('Input Component', () => {
  it('Should render Input Component correctly', () => {
    const component = render(<Input />);

    expect(component).toMatchSnapshot();
  });
});
