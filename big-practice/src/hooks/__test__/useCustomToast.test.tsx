import { renderHook } from '@testing-library/react-hooks';

// const
import { STATUSES } from '@constants';

import { useCustomToast } from '../useCustomToast';

// Create a mock for the toast function
const toastMock = jest.fn();

jest.mock('@chakra-ui/react', () => ({
  useToast: () => toastMock,
}));

describe('useCustomToast', () => {
  it('should call useToast with the correct arguments', () => {
    const { result } = renderHook(() => useCustomToast());

    // Call the showToast function
    result.current.showToast(STATUSES.SUCCESS, 'This is a success message');

    expect(toastMock).toHaveBeenCalledWith({
      position: 'top',
      status: STATUSES.SUCCESS,
      title: 'This is a success message',
      duration: 3000,
      isClosable: true,
    });
  });
});
