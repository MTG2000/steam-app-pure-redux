import { SET_ACTIVE_PAGE } from "../actions/types";

export const appPages = {
  store: "store",
  library: "library",
  about: "about"
};

const initialState = { activePage: appPages.store };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PAGE: {
      return {
        ...state,
        activePage: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
