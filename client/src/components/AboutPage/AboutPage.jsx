import React, { useEffect } from "react";
import { Container, Typography, Box, Grid, Link } from "@material-ui/core";
import { connect } from "react-redux";
import { setActivePage } from "../../Redux/actions/appActions";
import { appPages } from "../../Redux/reducers/appReducer";

const AboutPage = ({ setActivePage }) => {
  useEffect(() => {
    setActivePage(appPages.about);
  }, [setActivePage]);

  return (
    <Container>
      <Box display="flex" justifyContent="center" mb={7}>
        <img
          src="https://www.numerama.com/content/uploads/2019/03/steam-logo.jpg"
          alt="Steam"
          style={{ maxWidth: 800 }}
        />
      </Box>
      <Grid container justify="space-around">
        <Grid item xs={12} md={5} style={{ marginBottom: 55 }}>
          <Typography
            variant="h4"
            component="h4"
            color="textPrimary"
            gutterBottom
          >
            About This{" "}
            <Typography variant="h4" component="span" color="textSecondary">
              Site
            </Typography>
          </Typography>
          <Typography variant="h6" component="h6" color="textPrimary">
            This is a Web App built with React , Redux And Node.js. It
            replicates the famous Steam store because I found it as a good fit
            to try some advanced Redux functionality
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="h4"
            component="h4"
            color="textPrimary"
            gutterBottom
          >
            About The{" "}
            <Typography variant="h4" component="span" color="textSecondary">
              Developer
            </Typography>
          </Typography>
          <Typography variant="h6" component="h6" color="textPrimary">
            I am A Full-Stack Web Developer Specialized At Front-End
            Technologies.
            <br />
            You can check my portfolio here:{"   "}
            <Link
              href="https://mtgdev.herokuapp.com"
              target="_blank"
              color="textSecondary"
            >
              Portfolio
            </Link>
            <br />
            <br />
            And if you have a project in mind that you want to see as a reality
            or you just want to chat feel free to contact me at{" "}
            <Typography variant="h6" component="span" color="textSecondary">
              mtg0987654321@gmail.com
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(null, { setActivePage })(AboutPage);
