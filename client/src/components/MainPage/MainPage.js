import React, { useEffect } from "react";
import { Container, Grid, Box } from "@material-ui/core";
import GamesListContainer from "./GamesListContainer";
import VisibilityFilters from "./VisibilityFilters";
import ErrorComponent from "../layouts/Error";
import Loading from "../layouts/Loading";
import { connect } from "react-redux";
import GamesCarouselContainer from "./GamesCarouselContainer";
import { fetchGames } from "../../Redux/actions/gamesAction";
import { setActivePage } from "../../Redux/actions/appActions";
import { appPages } from "../../Redux/reducers/appReducer";

const MainPage = ({ games, loading, error, fetchGames, setActivePage }) => {
  document.title = "Steam Store";

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);
  useEffect(() => {
    setActivePage(appPages.store);
  }, [setActivePage]);

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;
  if (games.length === 0) return <Loading />;

  return (
    <Container>
      <GamesCarouselContainer />
      <Grid container justify="space-between" alignItems="flex-start">
        <Grid item xs={12} md={10}>
          <Box mb={5}>
            <GamesListContainer />
          </Box>
        </Grid>
        <Box mt={{ xs: 10 }} />
        <Grid item container justify="center" xs={12} md={2}>
          <VisibilityFilters />
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = state => ({
  games: state.games.items,
  loading: state.games.loading,
  error: state.games.error
});

export default connect(mapStateToProps, { fetchGames, setActivePage })(
  MainPage
);
