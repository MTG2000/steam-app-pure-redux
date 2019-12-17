import React from "react";
import { Typography, Box } from "@material-ui/core";

const ErrorComponent = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        color="textPrimary"
      >
        Some Error Happened
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
