import { START_FETCH, END_FETCH_SUCCESS, END_FETCH_FAILURE } from "./actions";

const initialState = {
  isFetching: false,
  perPage: 10,
  pageInfo: { currentPage: 0, hasNextPage: false },
  media: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isFetching: true
      };
    case END_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pageInfo: action.payload.data.Page.pageInfo,
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
