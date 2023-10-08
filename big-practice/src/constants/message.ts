export const PLACEHOLDER_MESSAGE = {
  NEWSLETTER: 'Enter Your Email Address',
};

export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  PRICE_INVALID: 'Please enter a number',
  MIN_PRICE: 'Please enter a price greater than 0',
  DESCRIPTION_INVALID: 'Description is invalid',
  STRING_LIMIT: 'This field allows maximum 50 characters',
  IMAGE_INVALID: 'Incorrect image file format',
  MAXIMUM_FILE_SIZE: 'The image size must be less than or equal to 100KB.',
};

export const SUCCESS_MESSAGES = {
  ADDED: (name: string) => `${name} was added successfully.`,
  EDITED: (name: string) => `${name} was edited successfully.`,
  DELETED: 'Product was deleted successfully.',
  ADD_TO_CART: 'Product has been added to cart',
};

export const NOTICE_MESSAGE = 'No records to display';
