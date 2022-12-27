import React from "react";
import { Post } from "./Post/Post";

export const SubredditPosts = (props) => {
  return props.posts != undefined ? (
    props.posts.map((i, key) => <Post details={i} />)
  ) : (
    <></>
  );
};
