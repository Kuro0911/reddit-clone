import React from "react";
import CreatePostWrapper from "./CreatePost.style";
import CollectionsIcon from "@mui/icons-material/Collections";
import LinkIcon from "@mui/icons-material/Link";

export const CreatePost = (props) => {
  return (
    <CreatePostWrapper>
      <div className="avtar">
        <img src={props.pfp} className="img" alt="no" />
      </div>
      <a className="create-post" href={`/r/${props.id}/submit`}>
        <input placeholder="Post" />
      </a>
      <div className="icons">
        <CollectionsIcon
          color="primary"
          sx={{ fontSize: 25 }}
          className="ico"
        />
        <LinkIcon color="primary" sx={{ fontSize: 25 }} className="ico" />
      </div>
    </CreatePostWrapper>
  );
};
