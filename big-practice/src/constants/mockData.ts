import { createId } from '@helpers';

export const INITIAL_PRODUCT = {
  id: '',
  name: '',
  image: '',
  description: '',
  category: '',
  price: 0,
};

export const INITIAL_CART = {
  productId: '',
  quantity: 0,
};

export const LIMIT_PRODUCTS = 8;

export const MOCK_PRODUCTS = [
  {
    name: 'name 1',
    image: 'https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1',
    price: 8,
    category: 'category 1',
    id: createId(),
    description: 'description',
  },
  {
    name: 'name 2',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202338/0005/eddy-sofa-60-94-q.jpg',
    price: 100,
    category: 'category 2',
    id: '2',
    description: 'description',
  },
  {
    name: 'name 3',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202328/0001/haven-2-piece-bumper-chaise-sectional-106-113-1-q.jpg',
    price: 15,
    category: 'category 3',
    description: 'description',
    id: createId(),
  },
  {
    name: 'name 1',
    image: 'https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1',
    price: 8,
    category: 'category 1',
    id: createId(),
    description: 'description',
  },
  {
    name: 'name 2',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202338/0005/eddy-sofa-60-94-q.jpg',
    price: 100,
    category: 'category 2',
    id: createId(),
    description: 'description',
  },
  {
    name: 'name 3',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202328/0001/haven-2-piece-bumper-chaise-sectional-106-113-1-q.jpg',
    price: 15,
    category: 'category 3',
    description: 'description',
    id: createId(),
  },
  {
    name: 'name 1',
    image: 'https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1',
    price: 8,
    category: 'category 1',
    id: createId(),
    description: 'description',
  },
  {
    name: 'name 2',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202338/0005/eddy-sofa-60-94-q.jpg',
    price: 100,
    category: 'category 2',
    id: '7',
    description: 'description',
  },
  {
    name: 'name 3',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202328/0001/haven-2-piece-bumper-chaise-sectional-106-113-1-q.jpg',
    price: 15,
    category: 'category 3',
    description: 'description',
    id: createId(),
  },
  {
    name: 'name 1',
    image: 'https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1',
    price: 8,
    category: 'category 1',
    id: createId(),
    description: 'description',
  },
  {
    name: 'name 2',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202338/0005/eddy-sofa-60-94-q.jpg',
    price: 100,
    category: 'category 2',
    id: '29',
    description: 'description',
  },
  {
    name: 'name 3',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202328/0001/haven-2-piece-bumper-chaise-sectional-106-113-1-q.jpg',
    price: 15,
    category: 'category 3',
    description: 'description',
    id: '38',
  },
];

export const MOCK_CARTS = [
  {
    name: 'name 1',
    image: 'https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1',
    price: 8,
    category: 'category 1',
    id: '1',
    description: 'description',
    quantity: 2,
  },
  {
    name: 'name 2',
    image:
      'https://assets.weimgs.com/weimgs/rk/images/wcm/products/202338/0005/eddy-sofa-60-94-q.jpg',
    price: 100,
    category: 'category 2',
    id: '2',
    description: 'description',
    quantity: 2,
  },
];

export const MOCK_PRODUCT = {
  name: 'name 1',
  image: 'https://rnb.scene7.com/is/image/roomandboard/MHH_Liv_ES1021_0523?size=900,900&scl=1',
  price: 8,
  category: 'category 1',
  id: '100',
  description: 'description',
};
