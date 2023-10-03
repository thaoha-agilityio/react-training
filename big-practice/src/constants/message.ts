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
};

export const SUCCESS_MESSAGES = {
  ADDED: (name: string) => `${name} was added successfully.`,
};
