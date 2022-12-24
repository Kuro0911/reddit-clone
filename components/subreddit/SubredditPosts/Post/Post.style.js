import styled from "styled-components";

export const PostWrap = styled.div`
  width: 60%;
  height: fit-content;
  background-color: white;
  margin-bottom: 0.75em;
  display: flex;
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
  .body {
    height: 100%
    width: 95%;
    margin-left: 0.5em;
    margin-top: 0.4em;
    text-align:left;
    .posted-by{
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: #7c7c7c;
      margin-bottom: 1.2em;
    }
    .head{
      color : black;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      margin-bottom: 0.4em;
    }
    .data{
      font-family: Noto Sans,Arial,sans-serif;
      font-size: 15px;
      font-weight: 400;
      line-height: 21px;
      word-break: break-word;
      color: #1c1c1c;
      margin-bottom: 1.5em;
    }
    .footer{
      .btn{
        color: #7c7c7c;
        
        span {
          text-transform: initial;
          font-weight: bold;
        }
      }
      .btn:hover{
        color: #7c7c7c;
      }
    }
  }
`;
