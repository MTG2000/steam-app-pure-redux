import { SET_ACTIVE_PAGE } from "./types";

export const setActivePage = payload => dispatch => {
  dispatch({ type: SET_ACTIVE_PAGE, payload });
};
