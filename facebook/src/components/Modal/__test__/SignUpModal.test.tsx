import { act, fireEvent, renderWithRouterAndQuery, waitFor } from '@/utils';

// Components
import SignUpFormModal from '../SignUpModal';

// Constants
import { INPUT_PLACEHOLDER, STATUS } from '@/constants';

// Hooks
import * as hooks from '@/hooks';

// Services
import { api } from '@/services';

// Mocks
import { USERS } from '@/mocks';

const mockProps = {
  isOpen: true,
  onClose: jest.fn(),
};

describe('SignUpFormModal Component', () => {
  const setup = () => {
    const { getByPlaceholderText, getByText, getAllByTestId, getByTestId } =
      renderWithRouterAndQuery(<SignUpFormModal {...mockProps} />);

    const email = getByPlaceholderText(INPUT_PLACEHOLDER.EMAIL);
    const password = getByPlaceholderText(INPUT_PLACEHOLDER.PASSWORD);
    const firstName = getByPlaceholderText(INPUT_PLACEHOLDER.FIRST_NAME);
    const surname = getByPlaceholderText(INPUT_PLACEHOLDER.SURNAME);
    const dateOfBirth = getByTestId('date-of-birth');
    const gender = getAllByTestId('select-gender')[1];
    const submitBtn = getByText('Sign up');

    return {
      email,
      password,
      submitBtn,
      firstName,
      surname,
      dateOfBirth,
      gender,
    };
  };

  it('Should render SignUpFormModal Component correctly', () => {
    const component = renderWithRouterAndQuery(<SignUpFormModal {...mockProps} />);

    expect(component).toMatchSnapshot();
  });

  it('should create the user with valid data', () => {
    jest.spyOn(api, 'postData').mockResolvedValue(USERS[0]);

    const { email, password, submitBtn, firstName, surname, dateOfBirth, gender } = setup();
    act(() => {
      fireEvent.change(email, { target: { value: USERS[0].email } });
      fireEvent.change(password, { target: { value: USERS[0].password } });
      fireEvent.change(firstName, { target: { value: USERS[0].firstName } });
      fireEvent.change(surname, { target: { value: USERS[0].surname } });
      fireEvent.change(dateOfBirth, { target: { value: USERS[0].dateOfBirth } });
      fireEvent.click(gender);

      fireEvent.click(submitBtn);
    });
  });

  it('should create the user with invalid data', () => {
    const errorMessage = 'Failed to create user';

    jest.spyOn(api, 'postData').mockRejectedValue(new Error(errorMessage));

    const mockShowToast = jest.fn();
    (jest.spyOn(hooks, 'useCustomToast') as jest.Mock).mockReturnValue({
      showToast: mockShowToast,
    });

    const { email, password, submitBtn, firstName, surname, dateOfBirth, gender } = setup();

    act(() => {
      fireEvent.change(email, { target: { value: USERS[0].email } });
      fireEvent.change(password, { target: { value: USERS[0].password } });
      fireEvent.change(firstName, { target: { value: USERS[0].firstName } });
      fireEvent.change(surname, { target: { value: USERS[0].surname } });
      fireEvent.change(dateOfBirth, { target: { value: USERS[0].dateOfBirth } });
      fireEvent.click(gender);
      fireEvent.click(submitBtn);
    });

    waitFor(() => {
      expect(mockShowToast).toHaveBeenCalledWith(STATUS.ERROR, errorMessage);
    });
  });
});
