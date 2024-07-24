import { act, fireEvent, renderWithRouterAndQuery, waitFor } from '@/utils';
// Components
import SignInForm from '..';
import SignUpFormModal from '@/components/Modal/SignUpModal';

// Constants
import { ERROR_MESSAGES, INPUT_PLACEHOLDER, STATUS } from '@/constants';
// Hooks
import * as hooks from '@/hooks';

// Services
import { api } from '@/services';

// Mocks
import { USERS, USER_INVALID } from '@/mocks';

describe('SignInForm Component', () => {
  const setup = () => {
    const { getByPlaceholderText, getByText } = renderWithRouterAndQuery(<SignInForm />);

    const email = getByPlaceholderText(INPUT_PLACEHOLDER.EMAIL);
    const password = getByPlaceholderText(INPUT_PLACEHOLDER.PASSWORD);

    const submitBtn = getByText('Log In');
    const sigUpBtn = getByText('Create New Account');

    return {
      email,
      password,
      submitBtn,
      sigUpBtn,
    };
  };

  it('Should render SignInForm Component correctly', () => {
    const component = renderWithRouterAndQuery(<SignInForm />);

    expect(component).toMatchSnapshot();
  });

  it('should login with valid data', () => {
    jest.spyOn(api, 'postData').mockResolvedValue(USERS[0]);

    const { email, password, submitBtn } = setup();
    act(() => {
      fireEvent.change(email, { target: { value: USERS[0].email } });
      fireEvent.change(password, { target: { value: USERS[0].password } });

      fireEvent.click(submitBtn);
    });
  });

  it('should login with invalid data', () => {
    jest.spyOn(api, 'postData').mockRejectedValue(new Error('Error'));

    const mockShowToast = jest.fn();
    (jest.spyOn(hooks, 'useCustomToast') as jest.Mock).mockReturnValue({
      showToast: mockShowToast,
    });

    const { email, password, submitBtn } = setup();
    act(() => {
      fireEvent.change(email, { target: { value: USER_INVALID.email } });
      fireEvent.change(password, { target: { value: USER_INVALID.password } });

      fireEvent.click(submitBtn);
    });

    waitFor(() => {
      expect(mockShowToast).toHaveBeenCalledWith(STATUS.ERROR, ERROR_MESSAGES.DEFAULT_API_ERROR);
    });
  });

  it('Should be show SignUpModal', () => {
    const { sigUpBtn } = setup();

    fireEvent.click(sigUpBtn);

    const onClose = jest.fn();
    const { getByText } = renderWithRouterAndQuery(
      <SignUpFormModal isOpen={true} onClose={onClose} />,
    );

    expect(getByText('Sign up')).toBeInTheDocument();
  });
});
