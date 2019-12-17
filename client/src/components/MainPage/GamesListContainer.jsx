import { connect } from "react-redux";
import GamesList from "./GamesList";
import { toggleIgnore, toggleWhitelist } from "../../Redux/actions/gamesAction";
import { gamesVisibilityFilters } from "../../Redux/reducers/gamesReducer";

const filterGames = (games, filter) => {
  let filteredGames = [];
  switch (filter) {
    case gamesVisibilityFilters.ALL_NOT_IGNORED:
      filteredGames = games.filter(g => !g.ignored);
      break;
    case gamesVisibilityFilters.IGONRED:
      filteredGames = games.filter(g => g.ignored);
      break;
    case gamesVisibilityFilters.WHITELISTED:
      filteredGames = games.filter(g => g.whitelisted);
      break;
    default:
      filteredGames = games;
      break;
  }

  return filteredGames;
};

const mapStateToProps = state => ({
  games: filterGames(state.games.items, state.games.visibilityFilter),
  loading: state.games.loading,
  error: state.games.error
});

const GamesListContainer = connect(mapStateToProps, {
  toggleIgnore,
  toggleWhitelist
})(GamesList);

export default GamesListContainer;
