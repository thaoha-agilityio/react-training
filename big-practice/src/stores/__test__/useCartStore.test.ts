import { act, renderHook } from '@testing-library/react-hooks';

// Constants
import { MOCK_CARTS } from '@constants';

// Stores
import { useCartStore } from '@stores';

describe('Testing for useCartStore', () => {
  it('should initialize with an empty carts array', () => {
    const { result } = renderHook(() => useCartStore());

    expect(result.current.cart).toEqual([]);
  });

  it('should set carts correctly', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.setCart(MOCK_CARTS);
    });

    expect(result.current.cart).toEqual(MOCK_CARTS);
  });

  it('should set product correctly', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.setCart(MOCK_CARTS);
      result.current.deleteCart('1');
    });

    expect(result.current.cart).toEqual([MOCK_CARTS[1]]);
  });
});
