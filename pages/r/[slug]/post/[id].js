import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Navbar } from "../../../../components/subreddit/Navbar/Navbar";
import { Sidebar } from "../../../../components/subreddit/Sidebar/Sidebar";
import { PostDetails } from "../../../../components/subreddit/SubredditPosts/PostDetails/PostDetails";
import { getPostByID } from "../../../../data/Api";
import Reddit from "../../../../components/Reddit/Reddit";

export default function PostDetail(props) {
  const router = useRouter();
  const [post, setPost] = useState(false);

  useEffect(() => {
    getPostByID(props.slug, props.id)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#373c3f" }}>
      <Reddit isOne post={post} />
    </div>
  );
}
export const getServerSideProps = async (context) => {
  let { slug, id } = context.query;
  return { props: { slug: slug, id: id } };
};
