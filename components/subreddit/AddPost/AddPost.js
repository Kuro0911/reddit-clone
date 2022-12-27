import React, { useState } from "react";
import AddPostWrapper from "./AddPost.style";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "../About/About";
import Button from "@mui/material/Button";
import { addNewPost } from "../../../data/Api";

export default function AddPost(props) {
  const [post, setPost] = useState({
    title: "",
    postedBy: "dhananajai",
    sub_id: "first",
    data: "",
  });
  const handleChangeTitle = (e) => {
    setPost({ ...post, title: e.target.value });
  };
  const handleChangeData = (e) => {
    setPost({ ...post, data: e.target.value });
  };
  const handlePost = () => {
    addNewPost(props.sub_id, post)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(post);
  };
  return (
    <AddPostWrapper>
      <div className="wrap">
        <h1>Create Post</h1>
        <hr />
        <div class="input-group mb-3">
          <input
            type="text"
            placeholder="Title"
            class="form-control"
            onChange={handleChangeTitle}
            value={post.title}
          />
        </div>
        <div class="input-group">
          <textarea
            class="form-control"
            placeholder="Text"
            aria-label="With textarea"
            onChange={handleChangeData}
            value={post.data}
          ></textarea>
        </div>
        <div className="btn-wrap">
          <Button variant="contained" className="btn" onClick={handlePost}>
            Create post
          </Button>
        </div>
      </div>
      <About />
    </AddPostWrapper>
  );
}
