export const ROUTES = {
  HOMEPAGE: '/',
  SHOP: '/shop',
  ADD_PRODUCT: '/add-product',
  EDIT_PRODUCT: '/edit-product/:uuid',
  EDIT_PRODUCT_PARAMS: '/edit-product/',
  DETAIL_PRODUCT: '/product-detail/:uuid',
  DETAIL_PRODUCT_PARAMS: '/product-detail/',
  SHOPPING_CART: '/shopping-cart',
};

// Define breadcrumbs data for navigation
export const DATA_CRUMBS = [
  {
    title: 'Shop',
    path: ROUTES.SHOP,
  },
  {
    title: 'Edit Product',
    path: ROUTES.EDIT_PRODUCT,
  },
];

export const ADD_PRODUCT_CRUMBS = [
  {
    title: 'Home',
    path: ROUTES.HOMEPAGE,
  },
  {
    title: 'Add Product',
    path: ROUTES.ADD_PRODUCT,
  },
];

export const CART_CRUMBS = [
  {
    title: 'Home',
    path: ROUTES.HOMEPAGE,
  },
  {
    title: 'Cart',
    path: ROUTES.SHOPPING_CART,
  },
];

export const SHOP_CRUMBS = [
  {
    title: 'Home',
    path: ROUTES.HOMEPAGE,
  },
  {
    title: 'Shop',
    path: ROUTES.ADD_PRODUCT,
  },
];
