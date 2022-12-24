import React from "react";
import {
  AboutWrap,
  CountWrap,
  FooterWrap,
  Slug,
  TagWrap,
  TextWrap,
  TopWrap,
} from "./About.style";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const About = (props) => {
  return (
    <AboutWrap>
      <TopWrap>
        <h4>About Community</h4>
        <MoreHorizOutlinedIcon className="icon" />
      </TopWrap>
      <TextWrap>{props.about}</TextWrap>
      <CountWrap>
        <div className="left">
          <h2>{props.members}</h2>
          <span>Members</span>
        </div>
        <div className="right">
          <h2>{props.membersOnline}</h2>
          <span>Online</span>
        </div>
      </CountWrap>
      <Slug />
      <FooterWrap>
        <div className="left">
          <CakeOutlinedIcon />
          <span>Created {props.date}</span>
        </div>
        <div className="right">
          <LocalOfferIcon />
          <span>r/{props.subName} topics</span>
        </div>
      </FooterWrap>
      <TagWrap>
        <span>Programming</span>
      </TagWrap>
    </AboutWrap>
  );
};
