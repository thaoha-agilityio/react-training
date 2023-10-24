import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Form from '../index';
import { ERROR_MESSAGES, MAXIMUM_FILE_SIZE, MOCK_PRODUCTS, PLACEHOLDER_MESSAGE } from '@constants';

const mockProps = {
  title: 'Test Title',
  onSubmitProduct: jest.fn(),
  isLoading: false,
};

describe('Form component', () => {
  const setup = () => {
    const { getByPlaceholderText, getByText } = render(<Form {...mockProps} />);

    const nameInput = getByPlaceholderText(PLACEHOLDER_MESSAGE.NAME);
    const descriptionInput = getByPlaceholderText(PLACEHOLDER_MESSAGE.DESCRIPTION);
    const priceInput = getByPlaceholderText(PLACEHOLDER_MESSAGE.PRICE);
    const imageInput = getByPlaceholderText(PLACEHOLDER_MESSAGE.IMAGE);
    const submitBtn = getByText('Submit');

    return {
      nameInput,
      descriptionInput,
      imageInput,
      priceInput,
      submitBtn,
    };
  };

  it('renders the form with proper labels and placeholders', () => {
    const { container } = render(<Form {...mockProps} />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('submits the form with invalid data', async () => {
    const { submitBtn, imageInput } = setup();

    // Set a large file size
    const largeImageFile = new File(['(binarydata)'], 'large_image.png', { type: 'image/png' });
    Object.defineProperty(largeImageFile, 'size', { value: MAXIMUM_FILE_SIZE });

    // Attach the large image file to the input
    fireEvent.change(imageInput, { target: { files: [largeImageFile] } });
    // Click submit button
    fireEvent.click(submitBtn);

    const errorMessage = await waitFor(() =>
      screen.getByText(ERROR_MESSAGES.FIELD_REQUIRED('Name')),
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    const { submitBtn, imageInput, nameInput, descriptionInput, priceInput } = setup();

    fireEvent.change(nameInput, { target: { value: 'Test Product' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.change(priceInput, { target: { value: '10.99' } });

    // Upload file

    const file = new File(['foo'], 'foo.jpeg', {
      type: 'image/jpeg',
    });

    fireEvent.change(imageInput, { target: { files: [file] } });

    // Click submit button
    fireEvent.click(submitBtn);
  });

  it('should display detail value', () => {
    const { container, getByText } = render(<Form product={MOCK_PRODUCTS[0]} {...mockProps} />);

    const submitBtn = getByText('Submit');
    fireEvent.click(submitBtn);

    expect(container).toBeInTheDocument();
  });
});
