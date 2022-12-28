import React, { useEffect, useState } from "react";
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
import Button from "@mui/material/Button";
import Link from "next/link";
export const About = (props) => {
  return (
    <AboutWrap>
      <TopWrap>
        <h4>{props.about != "home" ? "About Community" : "Home"}</h4>
        <MoreHorizOutlinedIcon className="icon" />
      </TopWrap>

      <TextWrap>
        {props.about != "home"
          ? props.about
          : "Your personal Reddit frontpage. Come here to check in with your favorite communities."}
      </TextWrap>
      {props.about != "home" ? (
        <>
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
        </>
      ) : (
        <div className="wrap">
          <Link href="/new">
            <Button variant="contained" className="btn">
              Create Community
            </Button>
          </Link>
          <Button variant="contained" className="btn">
            Create post
          </Button>
        </div>
      )}
    </AboutWrap>
  );
};
