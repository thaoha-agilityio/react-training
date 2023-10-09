import { renderHook } from '@testing-library/react-hooks';

// Constants
import { INITIAL_PRODUCT, MOCK_PRODUCTS } from '@constants';

// Stores
import { useProductStore } from '@stores';

describe('Testing for useProductStore', () => {
  it('should initialize with an empty products array', () => {
    const { result } = renderHook(() => useProductStore());
    expect(result.current.products).toEqual([]);
  });

  it('should set products correctly', () => {
    const { result } = renderHook(() => useProductStore());

    result.current.setProducts(MOCK_PRODUCTS);

    expect(result.current.products).toEqual(MOCK_PRODUCTS);
  });

  it('should initialize with an empty products object', () => {
    const { result } = renderHook(() => useProductStore());
    expect(result.current.product).toEqual(INITIAL_PRODUCT);
  });

  it('should set product correctly', () => {
    const { result } = renderHook(() => useProductStore());

    result.current.setProduct(MOCK_PRODUCTS[0]);

    expect(result.current.product).toEqual(MOCK_PRODUCTS[0]);
  });
});
