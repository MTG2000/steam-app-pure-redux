import React from "react";
import { Container, Typography, Link, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#111",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%"
      }}
    >
      <Container>
        <Box px={3} py={1}>
          <Typography color="textPrimary">
            Create By{" "}
            <Link
              color="textSecondary"
              href="https://mtgdev.herokuapp.com"
              target="_blank"
            >
              Mtg
            </Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
