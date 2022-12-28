import styled from "styled-components";

export const PostWrapper = styled.div`
  height: 100vh;
  background-color: white;
  width: 60%;
  height: 100%;
  margin-bottom: 0.75em;
  border-radius: 5px 5px 5px 5px;
  padding: 1em;
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
