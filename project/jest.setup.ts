import "@testing-library/jest-dom";

// Mock Hooks
jest.mock("@/hooks", () => ({
  __esModule: true,
  ...jest.requireActual("@/hooks"),
}));
