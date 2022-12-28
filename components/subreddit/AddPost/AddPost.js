import React, { useState } from "react";
import AddPostWrapper from "./AddPost.style";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "../About/About";
import Button from "@mui/material/Button";
import { addNewPost } from "../../../data/Api";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function AddPost(props) {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [post, setPost] = useState({
    title: "",
    postedBy: "dhananajai",
    sub_id: props.sub_id,
    data: "",
  });
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const handleChangeTitle = (e) => {
    setPost({ ...post, title: e.target.value });
  };
  const handleChangeData = (e) => {
    setPost({ ...post, data: e.target.value });
  };
  const handlePost = () => {
    addNewPost(props.sub_id, post)
      .then((res) => {
        setSeverity("success");
        setOpen(true);
      })
      .catch((err) => {
        setOpen(true);
        setSeverity("error");
        console.log(err);
      });
    console.log(post);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {severity === "success" ?  
          "Post Added!"
          : 
          "Could not Add the Post"
          }
        </Alert>
      </Snackbar>
    </AddPostWrapper>
  );
}
