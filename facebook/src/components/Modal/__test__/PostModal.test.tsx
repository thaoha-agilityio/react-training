import { act, fireEvent, renderWithRouterAndQuery, waitFor } from '@/utils';
import PostModal from '../PostModal';
import { COMMENTS, POSTS } from '@/mocks';
import { INPUT_PLACEHOLDER, STATUS } from '@/constants';
import { api } from '@/services';
// Hooks
import * as hooks from '@/hooks';

const mockProps = {
  isOpen: true,
  isCommentLoading: false,
  post: POSTS[0],
  comments: COMMENTS,
  onClose: jest.fn(),
  onLikePost: jest.fn(),
};

describe('PostModal Component', () => {
  it('Should render SignUpFormModal Component correctly', () => {
    const component = renderWithRouterAndQuery(<PostModal {...mockProps} />);

    expect(component).toMatchSnapshot();
  });

  it('should create comment with valid data', () => {
    jest.spyOn(api, 'postData').mockResolvedValue(COMMENTS[0]);
    const { getByPlaceholderText, getByTestId } = renderWithRouterAndQuery(
      <PostModal {...mockProps} />,
    );

    const comment = getByPlaceholderText(INPUT_PLACEHOLDER.COMMENT) as HTMLTextAreaElement;
    const submitBtn = getByTestId('comment');

    act(() => {
      fireEvent.change(comment, { target: { value: 'Comment1' } });
      fireEvent.click(submitBtn);
    });

    waitFor(() => {
      expect(comment.value).toBe('');
    });
  });

  it('should create comment with invalid data', () => {
    const errorMessage = 'Failed to create user';

    jest.spyOn(api, 'postData').mockRejectedValue(new Error(errorMessage));

    const mockShowToast = jest.fn();
    (jest.spyOn(hooks, 'useCustomToast') as jest.Mock).mockReturnValue({
      showToast: mockShowToast,
    });
    const { getByPlaceholderText, getByTestId } = renderWithRouterAndQuery(
      <PostModal {...mockProps} />,
    );

    const comment = getByPlaceholderText(INPUT_PLACEHOLDER.COMMENT);
    const submitBtn = getByTestId('comment');

    act(() => {
      fireEvent.change(comment, { target: { value: 'Comment1' } });
      fireEvent.click(submitBtn);
    });

    waitFor(() => {
      expect(mockShowToast).toHaveBeenCalledWith(STATUS.ERROR, errorMessage);
    });
  });

  it('Should render SignUpFormModal Component correctly', () => {
    const component = renderWithRouterAndQuery(<PostModal {...mockProps} />);

    expect(component).toMatchSnapshot();
  });

  it('Should be handleLikeComment is called', () => {
    const { getByText } = renderWithRouterAndQuery(<PostModal {...mockProps} />);

    const likeBtn = getByText('Like');
    fireEvent.click(likeBtn);

    expect(mockProps.onLikePost).toHaveBeenCalledTimes(1);
  });
});
