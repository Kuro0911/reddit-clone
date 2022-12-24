import styled from "styled-components";

export const SortbarWrap = styled.div`
  width: 60%;
  height: 5vh;
  background-color: white;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  border-radius: 5px 5px 5px 5px;

  .left {
    display: flex;
    width: 55%;
    justify-content: space-evenly;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
    width: 12%;
  }
  .btn {
    border-radius: 20px;
    margin-left: 2%;
    color: #7c7c7c;
    height: 3em;
    span {
      text-transform: initial;
      font-weight: bold;
    }
  }
  .active-btn {
    border-radius: 20px;
    margin-left: 2%;
    color: #ff6a33;
    height: 3em;
    span {
      text-transform: initial;
      font-weight: bold;
    }
  }
  .btn:hover {
    background-color: #dedede;
  }
  .active-btn:hover {
    background-color: #dedede;
  }
`;
