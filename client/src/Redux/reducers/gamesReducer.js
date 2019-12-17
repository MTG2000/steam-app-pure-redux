import {
  SET_GAMES,
  SET_GAME,
  SET_FETCH_ERROR,
  TOGGLE_IGNORE,
  TOGGLE_WHITELIST,
  TOGGLE_LIBRARY,
  SET_GAMES_VISIBILITY_FILTER,
  fetchGamesLabel,
  fetchGameLabel
} from "../actions/types";
import { API_START, API_END } from "../middlewares/apiMiddleware";

export const gamesVisibilityFilters = {
  ALL: "all",
  ALL_NOT_IGNORED: "all but not ignored",
  WHITELISTED: "whitelist",
  IGONRED: "ignored"
};

const initialState = {
  items: [],
  loading: false,
  error: false,
  visibilityFilter: gamesVisibilityFilters.ALL
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES: {
      return {
        ...state,
        items: action.payload,
        error: false
      };
    }
    case SET_GAME: {
      return {
        ...state,
        game: action.payload,
        error: false
      };
    }
    case SET_FETCH_ERROR: {
      return {
        ...state,
        error: true
      };
    }
    case TOGGLE_IGNORE: {
      const games = state.items.map(game => {
        if (game.id === action.payload.id)
          return { ...game, ignored: !game.ignored };
        return game;
      });
      let game = null;
      if (state.game && state.game.id === +action.payload.id) {
        game = { ...state.game, ignored: !state.game.ignored };
      }
      return {
        ...state,
        items: games,
        game
      };
    }
    case TOGGLE_WHITELIST: {
      const games = state.items.map(game => {
        if (game.id === action.payload.id)
          return { ...game, whitelisted: !game.whitelisted };
        return game;
      });
      let game = null;
      if (state.game && state.game.id === +action.payload.id) {
        game = { ...state.game, whitelisted: !state.game.whitelisted };
      }
      return {
        ...state,
        items: games,
        game
      };
    }
    case TOGGLE_LIBRARY: {
      const games = state.items.map(game => {
        if (game.id === action.payload.id)
          return { ...game, inLibrary: !game.inLibrary };
        return game;
      });
      let game = null;
      if (state.game && state.game.id === +action.payload.id) {
        game = { ...state.game, inLibrary: !state.game.inLibrary };
      }
      return {
        ...state,
        items: games,
        game
      };
    }
    case SET_GAMES_VISIBILITY_FILTER: {
      return {
        ...state,
        visibilityFilter: action.payload
      };
    }
    case API_START: {
      if (
        action.payload === fetchGamesLabel ||
        action.payload === fetchGameLabel
      ) {
        return { ...state, loading: true, error: false };
      }
      break;
    }
    case API_END: {
      if (
        action.payload === fetchGamesLabel ||
        action.payload === fetchGameLabel
      ) {
        return { ...state, loading: false };
      }
      break;
    }
    default: {
      return state;
    }
  }
};
