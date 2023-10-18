export const PLACEHOLDER_MESSAGE = {
  NEWSLETTER: 'Enter Your Email Address',
  NAME: 'Product name',
  CATEGORY: 'Category',
  DESCRIPTION: 'Description',
  PRICE: 'Price',
  IMAGE: 'Image',
};

export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  PRICE_INVALID: 'Please enter a number',
  MIN_PRICE: 'Please enter a price greater than 0',
  DESCRIPTION_INVALID: 'Description is invalid',
  STRING_LIMIT: 'This field allows maximum 50 characters',
  IMAGE_INVALID: 'Incorrect image file format',
  MAXIMUM_FILE_SIZE: 'The image size must be less than or equal to 80KB.',
};

export const SUCCESS_MESSAGES = {
  ADDED: (name: string) => `${name} was added successfully.`,
  EDITED: (name: string) => `${name} was edited successfully.`,
  DELETED: 'Product was deleted successfully.',
  ADD_TO_CART: 'Product has been added to cart',
};

export const NO_RESULT = {
  CART: 'Your shopping cart is empty.',
  PRODUCTS: 'No item to display',
};
