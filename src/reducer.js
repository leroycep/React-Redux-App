import { UPDATE_HELLO } from "./actions";

const initialState = {
  hello: "world!"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HELLO:
      return {
        ...state,
        hello: action.payload
      };
    default:
      return state;
  }
};
