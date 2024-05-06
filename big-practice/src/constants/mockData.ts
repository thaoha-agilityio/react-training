import { createId } from '@helpers';

export const INITIAL_PRODUCT = {
  id: '',
  name: '',
  image: '',
  description: '',
  price: 0,
};

export const INITIAL_CART = {
  productId: '',
  quantity: 0,
};

export const INITIAL_PRODUCT_CART = {
  id: '',
  name: '',
  image: '',
  description: '',
  price: 0,
  quantity: 0,
};

export const LIMIT_PRODUCTS = 8;

export const MOCK_PRODUCTS = [
  {
    name: 'name 1',
    image: 'https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1',
    price: 8,
    id: createId(),
    description: 'description',
  },
  {
    name: 'name 1',
    image: 'https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1',
    price: 8,
    id: '2',
    description: 'description',
  },

  {
    name: 'name 2',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202338/0005/eddy-sofa-60-94-q.jpg',
    price: 100,
    id: '29',
    description: 'description',
  },
  {
    name: 'name 3',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202328/0001/haven-2-piece-bumper-chaise-sectional-106-113-1-q.jpg',
    price: 15,
    description: 'description',
    id: '38',
  },
];

export const MOCK_CARTS = [
  {
    productId: '1',
    quantity: 2,
  },
  {
    productId: '38',
    quantity: 2,
  },
];

export const MOCK_PRODUCT = {
  id: '100',
  quantity: 2,
};

export const MOCK_PRODUCT_CART = {
  id: '1',
  name: 'name 3',
  image:
    'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202328/0001/haven-2-piece-bumper-chaise-sectional-106-113-1-q.jpg',
  price: 15,
  description: 'description',
  quantity: 0,
};

export const PLACEHOLDER_IMAGE =
  'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
