import { renderHook } from '@testing-library/react-hooks';

// Constants
import { MOCK_CARTS } from '@constants';

// Stores
import { useCartStore } from '@stores';

describe('Testing for useCartStore', () => {
  it('should initialize with an empty carts array', () => {
    const { result } = renderHook(() => useCartStore());
    expect(result.current.carts).toEqual([]);
  });

  it('should set carts correctly', () => {
    const { result } = renderHook(() => useCartStore());

    result.current.setCarts(MOCK_CARTS);

    expect(result.current.carts).toEqual(MOCK_CARTS);
  });

  it('should set product correctly', () => {
    const { result } = renderHook(() => useCartStore());

    result.current.deleteCart('1');

    expect(result.current.carts).toEqual([MOCK_CARTS[1]]);
  });
});
