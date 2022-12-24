import styled from "styled-components";
const SubredditWrapper = styled.div`
  background-color: #373c3f;
  .wrap {
    width: 100%;
    display: flex;
    margin-top: 1em;
  }
  .center-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: flex-end;
    width: 60%;
    margin-right: 2em;
  }
  .center-right {
    width: 20%;
  }
`;

export default SubredditWrapper;
