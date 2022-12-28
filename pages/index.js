import { useEffect, useState } from "react";
import Reddit from "../components/Reddit/reddit";
import { getHome } from "../data/Api";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getHome()
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const HOME_DATA = {
    img_url: "https://avatars.dicebear.com/api/adventurer/123.svg",
    about: "home",
    posts: posts,
  };
  return <Reddit {...HOME_DATA} />;
}
