import { act, renderHook } from '@testing-library/react';
import { useMessageStores } from '../messages';

describe('Test useMessageStores', () => {
  it('Initial value of useMessageStores', () => {
    const { result } = renderHook(() => useMessageStores());

    expect(result.current.successMessage).toEqual('');
    expect(result.current.errorMessage).toEqual('');
  });

  it('Should change value of notification and messageError when set value', () => {
    const { result } = renderHook(() => useMessageStores());

    expect(result.current.successMessage).toEqual('');
    act(() => result.current.setSuccessMessage('Success'));
    expect(result.current.successMessage).toEqual('Success');

    expect(result.current.errorMessage).toEqual('');
    act(() => result.current.setErrorMessage('Error'));
    expect(result.current.errorMessage).toEqual('Error');
  });
});