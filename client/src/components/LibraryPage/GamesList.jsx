import React from "react";
import { Box, Grid } from "@material-ui/core";
import GameCard from "./GameCard";

const GamesList = ({ games, removeGame }) => {
  return (
    <Box>
      <Grid container justify="center">
        {games.map(game => (
          <Grid item xs={12} key={game.id}>
            <GameCard game={game} removeGame={() => removeGame(game.id)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GamesList;
