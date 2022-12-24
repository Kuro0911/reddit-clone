import React, { useEffect } from "react";
import { About } from "../subreddit/About/About";
import { Banner } from "../subreddit/Banner/Banner";
import { CreatePost } from "../subreddit/CreatePost/CreatePost";
import { Navbar } from "../subreddit/Navbar/Navbar";
import { SubredditPosts } from "../subreddit/SubredditPosts/SubredditPosts";
import { Sortbar } from "../subreddit/Sortbar/Sortbar";
import SubredditWrapper from "./Reddit.style";

function Reddit(props) {
  useEffect(() => {
    console.log("getData");
  }, []);
  return (
    <SubredditWrapper>
      <Navbar name={props.name} img_url={props.img_url} />
      <Banner
        banner_url={props.banner_url}
        title={props.name}
        sub_id={props.sub_id}
        pfp={props.img_url}
      />
      <div className="wrap">
        <div className="center-left">
          <CreatePost pfp={props.img_url} id={props.id} />
          <Sortbar />
          <SubredditPosts posts={props.posts} />
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
