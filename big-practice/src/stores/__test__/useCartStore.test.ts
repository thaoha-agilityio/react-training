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

  it('should deleteCart is called', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.setCart(MOCK_CARTS);
      result.current.deleteCart('1');
    });

    expect(result.current.cart).toEqual([MOCK_CARTS[1]]);
  });

  it('should should update quantity if existed product in cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.setCart(MOCK_CARTS);
      result.current.addToCart('1');
    });

    // Update cart
    const newCarts = [...MOCK_CARTS];
    newCarts[0].quantity += 3;

    expect(result.current.cart).toEqual(newCarts);
  });

  it('should add new product to cart', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.setCart(MOCK_CARTS);
      result.current.addToCart('2');
    });

    expect(result.current.cart).toEqual([...MOCK_CARTS, { productId: '2', quantity: 1 }]);
  });
});
