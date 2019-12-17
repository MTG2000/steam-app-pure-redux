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
} from "./types";

import { apiAction } from "../middlewares/apiMiddleware";

export const fetchGames = () =>
  apiAction({
    url: "/api/games",
    onSuccess: setGames,
    onFailure: setFetchError,
    label: fetchGamesLabel,
    onSuccessMeta: { saveGames: true, all: true }
  });

export const fetchGame = id =>
  apiAction({
    url: `/api/games/${id}`,
    onSuccess: setGame,
    onFailure: setFetchError,
    label: fetchGameLabel
  });

export const toggleIgnore = id =>
  apiAction({
    url: "/api/games/ignore",
    method: "POST",
    data: { id },
    onSuccess: data => _toggleIgnore({ ...data, id }),
    onSuccessMeta: { saveGames: true }
  });

export const toggleWhitelist = id =>
  apiAction({
    url: "/api/games/whitelist",
    method: "POST",
    data: { id },
    onSuccess: data => _toggleWhitelist({ ...data, id })
  });

export const toggleLibrary = id =>
  apiAction({
    url: "/api/games/library",
    method: "POST",
    data: { id },
    onSuccess: data => _toggleLibrary({ ...data, id })
  });

const setGames = payload => ({ type: SET_GAMES, payload });

const setGame = payload => ({ type: SET_GAME, payload });

const setFetchError = () => dispatch => {
  dispatch({ type: SET_FETCH_ERROR });
};

const _toggleIgnore = payload => ({ type: TOGGLE_IGNORE, payload });

const _toggleWhitelist = payload => ({ type: TOGGLE_WHITELIST, payload });

const _toggleLibrary = payload => ({ type: TOGGLE_LIBRARY, payload });

export const setGamesVisibilityFilter = payload => dispatch => {
  dispatch({ type: SET_GAMES_VISIBILITY_FILTER, payload });
};
