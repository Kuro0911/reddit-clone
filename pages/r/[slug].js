import React, { useEffect } from "react";
import { About } from "../../components/subreddit/About/About";
import { Banner } from "../../components/subreddit/Banner/Banner";
import { CreatePost } from "../../components/subreddit/CreatePost/CreatePost";
import { Navbar } from "../../components/subreddit/Navbar/Navbar";
import { SubredditPosts } from "../../components/subreddit/SubredditPosts/SubredditPosts";
import { Sortbar } from "../../components/subreddit/Sortbar/Sortbar";
import SubredditWrapper from "./subreddit.style";

function r() {
  useEffect(() => {
    console.log("getData");
  }, []);
  const MOCK_DATA = {
    name: "sunraybee",
    sub_id: "sunraybee",
    id: "asdadasda",
    img_url: "https://avatars.dicebear.com/api/adventurer/123.svg",
    banner_url:
      "https://styles.redditmedia.com/t5_zioft/styles/bannerBackgroundImage_j97c6sqyktr21.jpg?width=4000&format=pjpg&s=8a73fafdbf80185d6b4de57897feb1169a7eb210",
    about_community: "xyz",
    posts: [
      {
        title: "test test",
        votes: "123",
        id: "post1",
        comments: "23",
        posted_by: "u/123aaa",
      },
      {
        title: "test test",
        votes: "123",
        id: "post2",
        comments: "23",
        posted_by: "u/123aaa",
      },
      {
        title: "test test",
        votes: "123",
        id: "post3",
        comments: "23",
        posted_by: "u/123aaa",
      },
    ],
  };
  return (
    <SubredditWrapper>
      <Navbar name={MOCK_DATA.name} img_url={MOCK_DATA.img_url} />
      <Banner
        banner_url={MOCK_DATA.banner_url}
        title={MOCK_DATA.name}
        sub_id={MOCK_DATA.sub_id}
        pfp={MOCK_DATA.img_url}
      />
      <div className="wrap">
        <div className="center-left">
          <CreatePost pfp={MOCK_DATA.img_url} id={MOCK_DATA.id} />
          <Sortbar />
          <SubredditPosts posts={MOCK_DATA.posts} />
        </div>
        <div className="center-right">
          <About />
        </div>
      </div>
    </SubredditWrapper>
  );
}

export default r;
