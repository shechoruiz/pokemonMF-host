// Mock para la función useEffect
export const mockEffectSpy = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: (callback: () => void) => callback(),
}));

// Mock para la función useState
export const mockStateSpy = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState: any) => [initialState, mockStateSpy],
}));
