import { act, renderHook } from '@testing-library/react-hooks';

// Constants
import { MOCK_PRODUCTS } from '@constants';

// Stores
import { useProductStore } from '@stores';

describe('Testing for useProductStore', () => {
  it('should initialize with an empty products array', () => {
    const { result } = renderHook(() => useProductStore());
    expect(result.current.products).toEqual([]);
  });

  it('should set products correctly', () => {
    const { result } = renderHook(() => useProductStore());

    act(() => {
      result.current.setProducts(MOCK_PRODUCTS);
    });

    expect(result.current.products).toEqual(MOCK_PRODUCTS);
  });
});
