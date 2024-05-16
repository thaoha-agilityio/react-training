import '@testing-library/jest-dom';

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Mock Hooks
jest.mock('@/hooks', () => ({
  __esModule: true,
  ...jest.requireActual('@/hooks'),
}));
