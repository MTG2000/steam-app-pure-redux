import React, { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Loading from "../layouts/Loading";
import ErrorComponent from "../layouts/Error";

import GamesList from "./GamesList";
import { fetchGames, toggleLibrary } from "../../Redux/actions/gamesAction";
import { setActivePage } from "../../Redux/actions/appActions";
import { appPages } from "../../Redux/reducers/appReducer";

const LibraryPage = ({
  games,
  loading,
  error,
  fetchGames,
  setActivePage,
  toggleLibrary
}) => {
  document.title = "My Library";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    fetchGames();
    setMounted(true);
  }, [fetchGames]);

  useEffect(() => {
    setActivePage(appPages.library);
  }, [setActivePage]);

  if (loading || !mounted) return <Loading />;
  if (error) return <ErrorComponent />;

  if (games.length === 0)
    return (
      <Container>
        <Typography
          variant="h3"
          component="h3"
          color="textPrimary"
          align="center"
        >
          You dont have any games in your library yet
        </Typography>
      </Container>
    );

  return (
    <Container>
      <Typography variant="h3" component="h1" color="textPrimary" gutterBottom>
        Games You Own:
      </Typography>
      <GamesList games={games} removeGame={toggleLibrary} />
    </Container>
  );
};

const mapStateToProps = state => ({
  games: state.games.items.filter(g => g.inLibrary),
  loading: state.games.loading,
  error: state.games.error
});

export default connect(mapStateToProps, {
  fetchGames,
  setActivePage,
  toggleLibrary
})(LibraryPage);
