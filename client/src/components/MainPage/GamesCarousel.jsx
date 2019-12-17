import React from "react";
import Slider from "infinite-react-carousel";
import GamesCarouselPage from "./GamescarouselPage";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    maxWidth: 1200,
    margin: "0 auto"
  }
});

const GamesCarousel = ({ games }) => {
  const classes = useStyle();

  const arrowStyle = {
    color: "#FFF",
    top: "50%"
  };

  return (
    <div className={classes.container}>
      <Slider
        dots
        autoplay={true}
        nextArrow={<NavigateNext style={arrowStyle} fontSize="large" />}
        prevArrow={<NavigateBefore style={arrowStyle} fontSize="large" />}
      >
        {games.map(game => (
          <Link to={`/games/${game.id}`} key={game.id}>
            <GamesCarouselPage
              title={game.title}
              description={game.description}
              img={game.image}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default GamesCarousel;
