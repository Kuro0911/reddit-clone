import React, { useEffect, useState } from "react";
import { About } from "../subreddit/About/About";
import { Banner } from "../subreddit/Banner/Banner";
import { CreatePost } from "../subreddit/CreatePost/CreatePost";
import { Navbar } from "../subreddit/Navbar/Navbar";
import { SubredditPosts } from "../subreddit/SubredditPosts/SubredditPosts";
import { Sortbar } from "../subreddit/Sortbar/Sortbar";
import SubredditWrapper from "./Reddit.style";
import Drawer from "@mui/material/Drawer";
import { Sidebar } from "../subreddit/Sidebar/Sidebar";
import { PostDetails } from "../subreddit/SubredditPosts/PostDetails/PostDetails";

function Reddit(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  const [anchor, setAnchor] = useState(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAnchor(open);
  };
  const handleOpen = (open) => {
    setAnchor(!anchor);
  };
  return (
    <SubredditWrapper>
      <Navbar name={props.name} img_url={props.img_url} open={handleOpen} />
      <Drawer anchor="left" open={anchor} onClose={toggleDrawer(false)}>
        <Sidebar />
      </Drawer>
      <Banner
        banner_url={props.banner_url}
        title={props.name}
        sub_id={props.sub_id}
        pfp={props.img_url}
      />
      <div className="wrap">
        <div className="center-left">
          {props.isOne === true ? (
            <PostDetails details={props.post} />
          ) : (
            <>
              <CreatePost pfp={props.img_url} id={props.sub_id} />
              <Sortbar />
              <SubredditPosts posts={props.posts} />
            </>
          )}
        </div>
        <div className="center-right">
          <About
            about={props.about}
            members={props.members}
            membersOnline={props.membersOnline}
            subName={props.sub_id}
          />
        </div>
      </div>
    </SubredditWrapper>
  );
}

export default Reddit;
