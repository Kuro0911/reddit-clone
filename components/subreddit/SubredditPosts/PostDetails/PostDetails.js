import React from "react";
import { PostWrapper } from "./PostDetails.style";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RedeemIcon from "@mui/icons-material/Redeem";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, IconButton } from "@mui/material";
export const PostDetails = ({ details }) => {
  console.log(details);
  let x = {
    data: "this is the second post on the first sub reddit",
    date: "2022-12-26T20:15:16.074Z",
    downVotes: "0",
    postedBy: "dhananajai",
    sub_id: "first",
    title: "this is the second Post",
    upVotes: "0",
  };
  return (
    <PostWrapper>
      <h1 className="title">{details.title}</h1>
      <span className="posted">{`u/${details.postedBy}`}</span>
      <hr />
      <div className="body">
        <p>{details.data}</p>
      </div>
      <div className="footer">
        <Button
          variant="text"
          startIcon={<ChatBubbleOutlineIcon />}
          className="btn"
        >
          <span>Comments</span>
        </Button>
        <Button variant="text" startIcon={<RedeemIcon />} className="btn">
          <span>Award</span>
        </Button>
        <Button variant="text" startIcon={<ShareIcon />} className="btn">
          <span>Share</span>
        </Button>
        <IconButton className="btn">
          <MoreHorizIcon />
        </IconButton>
      </div>
    </PostWrapper>
  );
};
