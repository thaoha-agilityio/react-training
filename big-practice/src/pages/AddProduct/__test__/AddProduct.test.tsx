import AddProduct from '..';
import { act, fireEvent } from '@testing-library/react';

//  Helpers
import { renderWithRouterAndQuery } from '@helpers';
import { MOCK_PRODUCTS } from '@constants';

//  Services
import { api } from '@services/APIRequest';

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// Mock services
jest.mock('@services/APIRequest', () => ({
  __esModule: true,
  ...jest.requireActual('@services/APIRequest'),
}));

describe('AddProduct component', () => {
  it('should render component correctly', () => {
    const { container } = renderWithRouterAndQuery(<AddProduct />);

    expect(container).toBeInTheDocument();
  });

  it('should call handleAddProduct success when submit button is clicked', () => {
    jest.spyOn(api, 'postData').mockResolvedValue(MOCK_PRODUCTS[1]);

    const { getByText } = renderWithRouterAndQuery(<AddProduct />);

    const submitBtn = getByText('Submit');
    act(() => {
      fireEvent.click(submitBtn);
    });
  });

  it('should call handleAddProduct error when submit button is clicked', () => {
    jest.spyOn(api, 'postData').mockRejectedValue(new Error('Error'));

    const { getByText } = renderWithRouterAndQuery(<AddProduct />);

    const submitBtn = getByText('Submit');
    act(() => {
      fireEvent.click(submitBtn);
    });
  });
});
