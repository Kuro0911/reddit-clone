import { useRouter } from "next/router";
import React from "react";
import AddPost from "../../../../components/subreddit/AddPost/AddPost";

export default function Submit() {
  const router = useRouter();
  return <AddPost sub_id={router.query.slug} />;
}
