import { rootReducer as reducer, initialState } from "../reducer";
import { ActionTypes } from "../actions";

const testState = initialState;

describe("reducer tests", () => {
  it("should return intial state", () => {
    expect(reducer(undefined, { type: ActionTypes.Reset })).toEqual(testState);
  });
});
