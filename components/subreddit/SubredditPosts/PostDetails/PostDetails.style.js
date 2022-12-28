import styled from "styled-components";

export const PostWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
  width: 60%;
  height: 100%;
  margin-bottom: 0.75em;
  border-radius: 5px 5px 5px 5px;
    .vote {
      display: flex;
      flex-direction: column; 
      align-items: center;
      height: 100%
      width: 5%;
      border-radius: 5px 0px 0px 5px;
      background-color: #d7d8d9;
      .number{
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 0.25em;
      color: ${(props) =>
        props.active === "up"
          ? "#ff6a33"
          : props.active === "down"
          ? "#7193ff"
          : "black"};
      }
      .upvote{      
        transform: rotateZ(270deg);
        color: #7c7c7c;
        cursor: pointer;
      }
      .upvote-act{      
        transform: rotateZ(270deg);
        color: #ff6a33;
        cursor: pointer;
      }
      .upvote:hover{
        color: #ff6a33;
      }
      .downvote{
        transform: rotateZ(90deg);
        color: #7c7c7c;
        cursor: pointer;
      }
      .downvote-act{      
        transform: rotateZ(90deg);
        color: #7193ff;
        cursor: pointer;
      }
      .downvote:hover{
        color: #7193ff;
      }
    }

  .right{
    padding: 0.25em;
    margin-left: 1em
  }
  .title {
    font-size: 1.5em;
    text-transform: capitalize;
  }
  .body {
    min-height: 10vh;
  }
  .footer {
    .btn {
      color: #7c7c7c;
      span {
        text-transform: initial;
        font-weight: bold;
      }
    }
    .btn:hover {
      color: #7c7c7c;
    }
  }
`;
