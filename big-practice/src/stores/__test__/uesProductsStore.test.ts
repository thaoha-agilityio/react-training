import { MOCK_PRODUCTS } from '@constants';
import { useProductStore } from '@stores/products';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing for useCountStore', () => {
  it('should initialize with an empty products array', () => {
    const { result } = renderHook(() => useProductStore());
    expect(result.current.products).toEqual([]);
  });

  it('should set products correctly', () => {
    const { result } = renderHook(() => useProductStore());

    result.current.setProducts(MOCK_PRODUCTS);

    expect(result.current.products).toEqual(MOCK_PRODUCTS);
  });

  it('should add more value when add product', () => {
    const { result } = renderHook(() => useProductStore());

    result.current.setProducts(MOCK_PRODUCTS);
    result.current.addProduct(MOCK_PRODUCTS[0]);

    expect(result.current.products).toEqual([...MOCK_PRODUCTS, MOCK_PRODUCTS[0]]);
  });
});
