import { act, fireEvent, renderWithRouterAndQuery, waitFor } from '@/utils';

// Component
import CreatePostModal from '../CreatePostModal';

// Constants
import { INPUT_PLACEHOLDER, STATUS } from '@/constants';

// Services
import { api } from '@/services';

// Mocks
import { POST_PAYLOAD } from '@/mocks';

// Hooks
import * as hooks from '@/hooks';

const mockProps = {
  isOpen: true,
  userName: 'Pam',
  onClose: jest.fn(),
};

describe('CreatePostModal  Component', () => {
  it('Should render CreatePostModal  Component correctly', () => {
    const component = renderWithRouterAndQuery(<CreatePostModal {...mockProps} />);

    expect(component).toMatchSnapshot();
  });

  it('should create the Employee with valid data', () => {
    jest.spyOn(api, 'postData').mockResolvedValue(POST_PAYLOAD);
    const { getByPlaceholderText, getByText } = renderWithRouterAndQuery(
      <CreatePostModal {...mockProps} />,
    );

    const content = getByPlaceholderText(INPUT_PLACEHOLDER.POST);
    const submitBtn = getByText('post');

    act(() => {
      fireEvent.change(content, { target: { values: POST_PAYLOAD.content } });

      fireEvent.click(submitBtn);
    });
  });

  it('should create the Employee with invalid data', () => {
    const errorMessage = 'Failed to create user';
    jest.spyOn(api, 'postData').mockRejectedValue(new Error(errorMessage));

    const mockShowToast = jest.fn();
    (jest.spyOn(hooks, 'useCustomToast') as jest.Mock).mockReturnValue({
      showToast: mockShowToast,
    });

    const { getByPlaceholderText, getByText } = renderWithRouterAndQuery(
      <CreatePostModal {...mockProps} />,
    );

    const content = getByPlaceholderText(INPUT_PLACEHOLDER.POST);
    const submitBtn = getByText('post');

    jest.spyOn(api, 'postData').mockResolvedValue(POST_PAYLOAD);

    act(() => {
      fireEvent.change(content, { target: { values: POST_PAYLOAD.content } });

      fireEvent.click(submitBtn);
    });

    waitFor(() => {
      expect(mockShowToast).toHaveBeenCalledWith(STATUS.ERROR, errorMessage);
    });
  });
});
