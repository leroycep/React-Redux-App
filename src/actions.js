import axios from "axios";

export const START_FETCH = "START_FETCH";
export const END_FETCH_SUCCESS = "END_FETCH_SUCCESS";
export const END_FETCH_FAILURE = "END_FETCH_FAILURE";

export const fetchData = page => (dispatch, getState) => {
  dispatch({ type: START_FETCH });

  const query = `
    query ($search: String, $page: Int, $perPage: Int) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (search: $search, isAdult: false) {
                id
                coverImage {
                    medium
                }
                title {
                    romaji
                    english
                }
            }
        }
    }
    `;

  const variables = {
    search: "",
    page: page ? page : 1,
    perPage: getState().perPage,
  };

  axios
    .post("https://graphql.anilist.co", { query, variables })
    .then(res => {
      console.log(res.data);
      dispatch({ type: END_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: END_FETCH_FAILURE });
    });
};
