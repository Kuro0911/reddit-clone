import React from "react";
import { Post } from "./Post/Post";

export const SubredditPosts = (props) => {
  return props.posts.map((i, key) => <Post details={i} />);
};
