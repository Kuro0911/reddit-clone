import React from "react";
import { Post } from "./Post";

export const SubredditPosts = (props) => {
  return props.posts.map((i, key) => <Post />);
};
