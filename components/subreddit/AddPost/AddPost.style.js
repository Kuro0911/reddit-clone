import styled from "styled-components";

const AddPostWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5em;
  .wrap {
    padding: 2em;
    margin-right: 1.5em;
    width: 50%;
    background-color: lightgrey;
  }
  .btn-wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    .btn {
      border-radius: 20px;
      background-color: #ff6a33;
      color: white;
      width: 15em;
      margin-left: 4%;
      height: 2.1em;
      margin-top: 1em;
    }
  }
`;

export default AddPostWrapper;
