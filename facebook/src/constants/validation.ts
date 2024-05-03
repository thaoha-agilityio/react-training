export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required.`,
  EMAIL_INVALID: 'Invalid email format.',
  PASSWORD_NOT_LONG: 'Your password must be at least 10 characters long.',
  PASSWORD_NOT_HAVE_NUMBER: 'Your password must contain at least one number.',
  PASSWORD_NOT_HAVE_SYMBOL: 'Your password must contain at least one special character.',
  EMAIL_IS_INVALID: 'Invalid email or password.',
};
