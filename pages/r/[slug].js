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
    id: "asdadasda",
    img_url: "https://avatars.dicebear.com/api/adventurer/123.svg",
    banner_url:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I_IqutLMvi9OO25NuKsG3wHaEK%26pid%3DApi&f=1&ipt=73691811e1eebb07b75608eaf9edcf0caeebdfba31775163d6cc0e5d0cb42714&ipo=images",
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
      <Banner banner_url={MOCK_DATA.banner_url} />
      <CreatePost />
      <Sortbar />
      <About />
      <SubredditPosts posts={MOCK_DATA.posts} />
    </SubredditWrapper>
  );
}

export default r;
