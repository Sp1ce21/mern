import * as api from "../api/index";

// Action creators
export const getPosts = (): any => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
