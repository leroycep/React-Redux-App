import {
  UPDATE_HELLO,
  START_FETCH,
  END_FETCH_SUCCESS,
  END_FETCH_FAILURE
} from "./actions";

const initialState = {
  hello: "world!",
  isFetching: false,
  page: 1,
  media: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HELLO:
      return {
        ...state,
        hello: action.payload
      };
    case START_FETCH:
      return {
        ...state,
        isFetching: true
      };
    case END_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        page: action.payload.data.Page.pageInfo.currentPage,
        media: action.payload.data.Page.media
      };
    case END_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};
