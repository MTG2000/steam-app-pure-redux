import React from "react";
import { DualRing } from "react-awesome-spinners";
import { Box, Typography } from "@material-ui/core";

const Loading = props => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      //alignItems="center"
      alignContent="center"
      style={{ height: "100vh" }}
      color="primary.main"
      flexWrap="wrap"
    >
      <DualRing {...props} />
      <Typography
        variant="h6"
        component="h6"
        color="textSecondary"
        style={{ width: "100%" }}
        align="center"
      >
        Loading
      </Typography>
    </Box>
  );
};

export default Loading;
