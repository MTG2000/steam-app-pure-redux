import React from "react";
import { Paper, Typography, makeStyles, Grid, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles({
  paper: props => ({
    backgroundColor: props.palette.primary.main
  }),
  image: {
    position: "relative",
    background: "black",
    width: "100%",
    height: 0,
    paddingTop: "56.25%", //padding percentage is based of the width NOT the height
    "& img": {
      position: "absolute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      top: 0,
      left: 0,
      objectPosition: "center top"
    }
  }
});

const GamesCarouselPage = ({ title, img, description }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  description = description.slice(0, 150) + " ... ";

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <div className={classes.image}>
            <img src={img} alt={title} />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box px={2} py={2} pt={7}>
            <Typography variant="h4" component="h2" color="textPrimary">
              {title}
            </Typography>
            <Typography variant="h6" component="h2" color="textSecondary">
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GamesCarouselPage;
