import { connect } from "react-redux";
import GamesCarousel from "./GamesCarousel";

const filterCarouselGames = games => games.filter(g => g.showCarousel);

const mapStateToProps = state => ({
  games: filterCarouselGames(state.games.items)
});

const GamesCarouselContainer = connect(mapStateToProps)(GamesCarousel);

export default GamesCarouselContainer;
