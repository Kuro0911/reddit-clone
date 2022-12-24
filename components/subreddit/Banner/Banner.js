import React from "react";
import Button from "@mui/material/Button";
import { BannerWrap, ImageWrap, TextWrap } from "./Banner.style";
import { lineHeight } from "@mui/system";

export const Banner = (props) => {
  return props.banner_url != undefined ? (
    <BannerWrap>
      <ImageWrap>
        <img src={props.banner_url} className="img" alt="" />
      </ImageWrap>
      <TextWrap>
        <div className="circle">
          <img src={props.pfp} className="img" alt="" />
        </div>
        <div style={{ textAlign: "left", lineHeight: "0em" }}>
          <h1>{props.title}</h1>
          <span>r/{props.sub_id}</span>
        </div>
        <Button variant="contained" className="btn">
          Join
        </Button>
      </TextWrap>
    </BannerWrap>
  ) : (
    <></>
  );
};
