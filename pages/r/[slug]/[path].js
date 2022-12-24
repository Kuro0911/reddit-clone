import React from "react";
import { useRouter } from "next/router";

function post() {
  const { asPath } = useRouter();
  return <div>{asPath}</div>;
}

export default post;
