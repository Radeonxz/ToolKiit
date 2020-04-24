import { StoreState } from "../index";
import { initialState } from "../reducer";
import { selectTip, selectTotal, selectPerPerson } from "../selectors";

const testState: StoreState = initialState;

describe("selector tests", () => {
  it("should select correct tip", () => {
    expect(
      selectTip({
        ...testState,
        bill: 100,
        percentage: 10,
      }),
    ).toEqual("10.00");
  });

  it("should select correct total", () => {
    expect(
      selectTotal({
        ...testState,
        bill: 100,
        percentage: 10,
      }),
    ).toEqual("110.00");
  });

  it("should select correct decimal tip", () => {
    expect(
      selectTip({
        ...testState,
        bill: 89.99,
        percentage: 25,
      }),
    ).toEqual("22.50");
  });

  it("should select correct decimal total", () => {
    expect(
      selectTotal({
        ...testState,
        bill: 89.99,
        percentage: 25,
      }),
    ).toEqual("112.49");
  });

  it("should select split", () => {
    expect(
      selectPerPerson({
        ...testState,
        bill: 89.99,
        percentage: 25,
        split: 3,
      }),
    ).toEqual("37.50");
  });
});
