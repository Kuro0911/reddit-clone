import React, { useState } from "react";
import AddSubredditWrapper from "./AddSubreddit.style";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "../About/About";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { addNewSubreddit } from "../../../data/Api";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";
import Drawer from "@mui/material/Drawer";

export default function AddSubreddit(props) {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [subreddit, setSubreddit] = useState({
    name: "",
    sub_id: "",
    about: "",
  });
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const handleChangeName = (e) => {
    setSubreddit({ ...subreddit, name: e.target.value });
  };
  const handleChangeSubname = (e) => {
    setSubreddit({ ...subreddit, sub_id: e.target.value });
  };
  const handleChangeAbout = (e) => {
    setSubreddit({ ...subreddit, about: e.target.value });
  };
  const handleSubreddit = () => {
    addNewSubreddit(subreddit)
      .then((res) => {
        setSeverity("success");
        setOpen(true);
      })
      .catch((err) => {
        setOpen(true);
        setSeverity("error");
        console.log(err);
      });
    console.log(subreddit);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
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
    <>
      <Navbar open={handleOpen} />
      <Drawer anchor="left" open={anchor} onClose={toggleDrawer(false)}>
        <Sidebar />
      </Drawer>
      <AddSubredditWrapper>
        <div className="wrap">
          <h1>Create New Subreddit</h1>
          <hr />
          <div class="input-group mb-3">
            <input
              type="text"
              placeholder="Title"
              class="form-control"
              onChange={handleChangeName}
              value={subreddit.name}
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                r/
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="sub_id"
              onChange={handleChangeSubname}
              value={subreddit.sub_id}
            />
          </div>

          <div class="input-group">
            <textarea
              class="form-control"
              placeholder="Text"
              aria-label="With textarea"
              onChange={handleChangeAbout}
              value={subreddit.about}
            ></textarea>
          </div>
          <div className="btn-wrap">
            <Button
              variant="contained"
              className="btn"
              onClick={handleSubreddit}
            >
              Create Subreddit
            </Button>
          </div>
        </div>
        <About />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {severity === "success"
              ? "Subreddit Added!"
              : "Could not Add the Subreddit"}
          </Alert>
        </Snackbar>
      </AddSubredditWrapper>
    </>
  );
}
