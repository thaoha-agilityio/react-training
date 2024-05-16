import { fireEvent, render } from '@/utils';

// Component
import CreatePost from '..';

// Constants
import { INPUT_PLACEHOLDER } from '@/constants';

describe('CreatePost Component', () => {
  it('Should render CreatePost  Component correctly', () => {
    const component = render(<CreatePost />);

    expect(component).toMatchSnapshot();
  });

  it('Should show CreatePostModal', () => {
    const { getByPlaceholderText } = render(<CreatePost />);

    const inputElement = getByPlaceholderText(INPUT_PLACEHOLDER.POST);
    fireEvent.click(inputElement);
  });
});
