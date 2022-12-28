import React, { useState } from "react";
import { PostWrap } from "./Post.style";
import IconButton from "@mui/material/Button";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import ForwardOutlinedIcon from "@mui/icons-material/ForwardOutlined";
import ForwardIcon from "@mui/icons-material/Forward";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RedeemIcon from "@mui/icons-material/Redeem";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";

export const Post = ({ details }) => {
  const [votes, setVotes] = useState(details.upVotes);
  const [active, setActive] = useState("");
  const { pathname } = useRouter();
  const handleClick = (flag) => {
    console.log(flag);
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
    <PostWrap active={active}>
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
        <div className="number">{votes}</div>
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
      <div className="body">
        <div className="posted-by">
          <span>
            {pathname === "/" ? (
              <a href={`/r/${details.sub_id}`}>r/{details.sub_id}</a>
            ) : (
              <></>
            )}
            Posted by u/{details.postedBy} {details.date}
          </span>
        </div>
        <Link href={`/r/${details.sub_id}/post/${details._id}`}>
          <div className="head">
            <span>{details.title}</span>
          </div>
        </Link>
        <div className="data">
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
    </PostWrap>
  );
};
