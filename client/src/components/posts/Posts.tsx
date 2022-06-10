import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";

const Posts = () => {
  // const classes = useStyles();
  const posts = useSelector(({ posts }: any) => posts);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      // className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post: any) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
