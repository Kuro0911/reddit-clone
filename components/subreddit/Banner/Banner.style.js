import styled from "styled-components";

export const BannerWrap = styled.div`
  width: 100%;
  height: 30vh;
  background-color: white;
  h1 {
    font-weight: 500;
  }
`;
const ImageWrap = styled.div`
  img {
    height: 20vh;
    width: 100%;
    object-fit: cover;
  }
`;
const TextWrap = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  align-items: center;
  align-content: center;
  justify-content: center;

  img {
    width: 95%;
    object-fit: contain;
  }
  .btn {
    background-color: #ff4500;
    border-radius: 20px;
    min-width: 6vw;
    margin-left: 4%;
    height: 2.1em;
    margin-top: 1em;
  }
  .btn:hover {
    background-color: #ff6a33;
  }
  .circle {
    height: 10vh;
    width: 5vw;
    background-color: #fff;
    border-radius: 100%;
    margin-right: 2.2em;
    margin-left: -30%;
    margin-top: -1%;
  }
  span {
    color: #7c7c7c;
    font-weight: 700;
  }
`;
export { ImageWrap, TextWrap };
