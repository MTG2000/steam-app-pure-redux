import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CardMiniList from "./CardMiniList";

const useStyle = makeStyles({
  card: props => ({
    width: 270,
    height: 385,
    margin: "20px 15px 0 15px",
    position: "relative",
    background: props.palette.primary.main,
    boxShadow: "3px 4px 10px #112",
    opacity: props.ignored ? 0.5 : 1
  }),
  media: {
    height: "70%"
  },
  content: props => ({
    height: "30%"
    // color: props.palette.primary.contrastText
  }),
  title: {
    height: "46%"
  }
});

const GameCard = props => {
  const { title, price, thumbnail, ignored, whitelisted } = props.game;
  const theme = useTheme();
  const classes = useStyle({ ...theme, ignored, whitelisted });

  //Setting the mini list visible on card hover and not otherwise
  const cardRef = useRef(null);
  const miniListRef = useRef(null);
  const [miniListVisible, setMiniListVisible] = useState(false);
  useEffect(() => {
    cardRef.current.addEventListener("mouseenter", () => {
      setMiniListVisible(true);
    });
    cardRef.current.addEventListener("mouseleave", () => {
      setMiniListVisible(false);
    });
  }, []);

  useEffect(() => {
    miniListRef.current.addEventListener("click", e => {
      e.preventDefault(); //This is for disabling page change when clicking on the ignore or whitelist btns
    });
  }, []);

  return (
    <Card ref={cardRef} className={classes.card}>
      <CardMedia className={classes.media} image={thumbnail} title={title} />
      <CardContent className={classes.content}>
        <Typography
          variant="h5"
          component="h6"
          gutterBottom
          className={classes.title}
          color="textPrimary"
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          align="right"
          color="textSecondary"
        >
          {price} $
        </Typography>
      </CardContent>
      <div ref={miniListRef}>
        <CardMiniList
          visible={miniListVisible}
          ignored={ignored}
          whitelisted={whitelisted}
          handleIgnore={props.handleIgnore}
          handleWhitelist={props.handleWhitelist}
        />
      </div>
    </Card>
  );
};

export default GameCard;
