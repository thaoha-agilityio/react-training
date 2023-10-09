import { fireEvent, render } from '@testing-library/react';

import ConfirmModal from '..';

const mockProps = {
  isOpen: true,
  title: 'Delete Confirmation',
  textCancel: 'Cancel',
  textSubmit: 'Yes, Delete',
  text: 'Are you sure you want to delete this item?',
  onClose: jest.fn(),
  onSubmit: jest.fn(),
  isLoading: false,
};

describe('ConfirmModal Component', () => {
  it('renders product information correctly', () => {
    const { getByText } = render(<ConfirmModal {...mockProps} />);

    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByText(mockProps.text)).toBeInTheDocument();

    const cancelBtn = getByText(mockProps.textCancel);
    fireEvent.click(cancelBtn);
    expect(mockProps.onClose).toHaveBeenCalled();

    const submitBtn = getByText(mockProps.textSubmit);
    fireEvent.click(submitBtn);
    expect(mockProps.onSubmit).toHaveBeenCalled();
  });
});
