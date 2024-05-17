import { renderHook } from '@/utils';

// Hooks
import { useCustomToast } from '../useToast';

// Constants
import { STATUS } from '@/constants';

const toastMock = jest.fn();

jest.mock('@chakra-ui/react', () => ({
  useToast: () => toastMock,
}));

describe('useCustomToast', () => {
  it('should call useToast with the correct arguments', () => {
    const { result } = renderHook(() => useCustomToast());

    // Call the showToast function
    result.current.showToast(STATUS.SUCCESS, 'This is a success message');

    expect(toastMock).toHaveBeenCalledWith({
      position: 'top',
      status: STATUS.SUCCESS,
      title: 'This is a success message',
      duration: 2000,
      isClosable: true,
    });
  });
});
