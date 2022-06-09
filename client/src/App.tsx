import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./assets/images/memories.png";
import CustomForm from "./components/form/CustomForm";
import Posts from "./components/posts/Posts";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          src={memories}
          alt="memories"
          height={60}
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CustomForm />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default App;
