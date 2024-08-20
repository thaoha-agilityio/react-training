import "@testing-library/jest-dom";

// Mock Hooks
jest.mock("@/hooks", () => ({
  __esModule: true,
  ...jest.requireActual("@/hooks"),
}));

// Mocking react-toastify
jest.mock("react-toastify", () => ({
  toast: jest.fn(),
}));

// Mock Stores
jest.mock("@/stores", () => ({
  __esModule: true,
  ...jest.requireActual("@/stores"),
}));
