import React, { useState } from "react";
import { PostWrapper } from "./PostDetails.style";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RedeemIcon from "@mui/icons-material/Redeem";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, IconButton } from "@mui/material";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import ForwardIcon from "@mui/icons-material/Forward";
export const PostDetails = ({ details }) => {
  const [active, setActive] = useState("");
  const [votes, setVotes] = useState(Number(details.upVotes));
  const handleClick = (flag) => {
    if (flag === "up" && active !== "up") {
      setVotes(votes + 1);
      setActive("up");
    } else if (flag === "up" && active === "up") {
      setVotes(votes - 1);
      setActive("");
    } else if (flag === "down" && active !== "down") {
      setVotes(votes - 1);
      setActive("down");
    } else {
      setVotes(votes + 1);
      setActive("");
    }
  };
  return (
    <PostWrapper>
      <div className="vote">
        {active === "up" ? (
          <ForwardIcon
            className="upvote-act"
            onClick={() => {
              handleClick("up");
            }}
          />
        ) : (
          <ForwardOutlinedIcon
            className="upvote"
            onClick={() => {
              handleClick("up");
            }}
          />
        )}
        <div className="number">{details.upVotes}</div>
        {active === "down" ? (
          <ForwardIcon
            className="downvote-act"
            onClick={() => {
              handleClick("down");
            }}
          />
        ) : (
          <ForwardOutlinedIcon
            className="downvote"
            onClick={() => {
              handleClick("down");
            }}
          />
        )}
      </div>
      <div className="right">
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
      </div>
    </PostWrapper>
  );
};
