import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  Grid,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import RemoveDialog from "./RemoveDialog";

const useStyle = makeStyles({
  card: props => ({
    width: 240,
    margin: "20px auto",
    position: "relative",
    background: props.palette.primary.dark,
    boxShadow: "3px 4px 10px #112",
    [props.breakpoints.up("md")]: {
      width: "100%",
      maxWidth: 900
    }
  }),
  content: props => ({
    width: "100%",
    paddingTop: 25,
    [props.breakpoints.up("md")]: {
      width: "auto",
      flex: 3,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }),
  media: props => ({
    width: "100%",
    height: 240,
    [props.breakpoints.up("sm")]: {
      width: 240,
      height: 240
    }
  }),
  title: {
    "& a": {
      color: "#FFF"
    }
  },
  downloadBtn: {
    color: "#FFF",
    background: "#3c9353",
    display: "block",
    width: 128,
    margin: "10px auto"
  },
  removeBtn: {
    color: "#ca4545",
    display: "block",
    width: 128,
    margin: "10px auto"
  }
});

const GameCard = props => {
  const { id, title, thumbnail } = props.game;
  const theme = useTheme();
  const classes = useStyle({ ...theme });
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleRemove = remove => {
    if (remove) props.removeGame();
    setDialogOpen(false);
  };

  return (
    <Card className={classes.card}>
      <Grid container>
        <CardMedia className={classes.media} image={thumbnail} title={title} />
        <CardContent className={classes.content}>
          <Typography variant="h4" component="h6" className={classes.title}>
            <Link to={`/games/${id}`}>{title}</Link>
          </Typography>
          <div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                className={classes.downloadBtn}
                size="large"
                href="#download"
              >
                Download
              </Button>
            </div>
            <div>
              <Button
                className={classes.removeBtn}
                size="small"
                // onClick={handleRemove}
                onClick={() => setDialogOpen(true)}
              >
                <Typography>Remove</Typography>
              </Button>
            </div>
          </div>
        </CardContent>
      </Grid>
      <RemoveDialog
        open={dialogOpen}
        handleClose={handleRemove}
        title={title}
      />
    </Card>
  );
};

export default GameCard;
