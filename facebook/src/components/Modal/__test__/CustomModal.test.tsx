import { render } from '@/utils';

// Component
import CustomModal from '../CustomModal';

describe('CustomModal component', () => {
  it('should render with provided title and children', () => {
    const title = 'Test Modal';
    const content = <div>Modal content</div>;
    const { getByText } = render(
      <CustomModal isOpen={true} title={title} onClose={() => {}}>
        {content}
      </CustomModal>,
    );
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText('Modal content')).toBeInTheDocument();
  });

  it('should render with custom size and modal footer', () => {
    const onClose = jest.fn();
    const modalFooterContent = <button>Confirm</button>;
    const { getByText } = render(
      <CustomModal
        isOpen={true}
        title='Test Modal'
        onClose={onClose}
        size='lg'
        childrenModalFooter={modalFooterContent}
      >
        <div>Modal content</div>
      </CustomModal>,
    );

    expect(getByText('Test Modal')).toBeInTheDocument();
    expect(getByText('Modal content')).toBeInTheDocument();
    expect(getByText('Confirm')).toBeInTheDocument();
  });
});
