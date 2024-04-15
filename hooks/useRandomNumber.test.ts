import { mockStateSpy } from "../mocks/react.mock";
import { useRandomNumber } from "./useRandomNumber";

describe("useRandomNumber", () => {
  const setRandomNumbersSpy = jest.fn();
  const setUseState = (...values: any[]) => {
    mockStateSpy.mockReturnValueOnce([values[0], setRandomNumbersSpy]);
  };
  beforeEach(() => {
    setUseState(0);
  });
  afterEach(() => {});

  it("should generate 3 random numbers", () => {
    const { randomNumbers } = useRandomNumber();
    expect(randomNumbers.length).toBe(3);
  });
});
