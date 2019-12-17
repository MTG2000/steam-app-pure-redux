import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";

const GamesList = ({ games, toggleIgnore, toggleWhitelist }) => {
  return (
    <Box>
      <Grid container justify="center">
        {games.map(game => (
          <Grid item key={game.id}>
            <Link to={`/games/${game.id}`} style={{ textDecoration: "none" }}>
              <GameCard
                game={game}
                handleIgnore={() => toggleIgnore(game.id)}
                handleWhitelist={() => toggleWhitelist(game.id)}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GamesList;
