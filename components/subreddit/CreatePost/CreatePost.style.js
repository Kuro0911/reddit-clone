import styled from "styled-components";

const CreatePostWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  border-radius: 5px 5px 5px 5px;
  background-color: white;
  .avtar {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 5vh;
      width: 2.5vw;
    }
    background-color: #fff;
    border-radius: 100%;
  }
  .create-post {
    width: 75%;
    input {
      width: 95%;
      height: 3vh;
      font-size: 0.9em;
    }
    input:hover {
      outline: auto;
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    .ico {
      margin-left: 0.75em;
    }
  }
`;

export default CreatePostWrapper;
