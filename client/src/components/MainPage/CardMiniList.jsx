import React from "react";
import { Box, Typography, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles({
  icon: props => ({
    position: "absolute",
    cursor: "pointer",
    right: 20,
    top: 20,
    backgroundColor: props.palette.secondary.dark,
    padding: "1px 5px 0",
    borderRadius: 3,
    transitionDuration: ".4s",
    opacity: props.visible ? "1" : "0",
    "&:hover": {
      backgroundColor: props.palette.secondary.main,

      "& ul": {
        visibility: "visible",
        opacity: 1
      }
    }
  }),
  list: props => ({
    position: "absolute",
    width: 105,
    cursor: "pointer",
    right: 0,
    top: 2,
    padding: "5px 6px",
    listStyle: "none",
    backgroundColor: "#EEE",
    borderRadius: 3,
    transition: "opacity .4s ease-in-out",
    visibility: "hidden",
    opacity: 0,
    "& li": {
      padding: "1px 14px",
      marginTop: "3px",
      borderRadius: 5,
      backgroundColor: "inheriet",
      color: "#222",
      border: ` 2px solid  ${props.palette.secondary.light}`,
      "&:hover": {
        backgroundColor: props.palette.secondary.main,
        color: "#FFF"
      },
      "&.active": {
        backgroundColor: props.palette.secondary.light,
        color: "#FFF"
      }
    }
  })
});

const CardMiniList = ({
  handleIgnore,
  ignored,
  handleWhitelist,
  whitelisted,
  visible
}) => {
  const theme = useTheme();
  const classes = useStyles({ ...theme, visible });

  return (
    <>
      <Box className={classes.icon}>
        <Menu fontSize="small" />
        <Box component="ul" className={classes.list}>
          <Typography variant="body2">
            <li onClick={handleIgnore} className={`${ignored ? "active" : ""}`}>
              {ignored ? "Ignored" : "Ignore"}
            </li>
          </Typography>
          <Typography variant="body2">
            <li
              onClick={handleWhitelist}
              className={`${whitelisted ? "active" : ""}`}
            >
              {whitelisted ? "Whitelisted" : "Whitelist"}
            </li>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CardMiniList;
