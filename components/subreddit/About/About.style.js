import styled from "styled-components";

const AboutWrap = styled.div`
  background-color: white;
  height: fit-content;
  padding-bottom: 1em;
`;
const TopWrap = styled.div`
  background-color: #ff4500;
  height: 4em;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    margin-left: 1em;
  }
  .icon {
    margin-right: 1em;
  }
`;
const TextWrap = styled.div`
  text-align: left;
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
  word-wrap: break-word;
  margin: 1em;
  color: #444648;
`;
const CountWrap = styled.div`
  display: flex;
  line-height: 20px;
  text-align: left;
  width: 100%;
  color: #2b2c2d;
  .left {
    margin-left: 1em;
  }
  .right {
    margin-left: 4em;
  }
  h2 {
    font-size: 16px;
    font-weight: 500;
  }
`;
const Slug = styled.div`
  width: 100%;
  background-color: rgba(26, 26, 27, 0.07);
  height: 1.7px;
  margin-top: 1em;
`;
const FooterWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 1em;
  color: #2b2c2d;

  .left {
    display: flex;
    align-items: flex-start;
    margin-left: 1em;
    margin-top: 0.75em;
  }
  .right {
    display: flex;
    align-items: flex-start;
    margin-top: 0.75em;
    margin-left: 1em;
  }
  span {
    margin-left: 0.65em;
  }
`;
const TagWrap = styled.div`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2em;
  width: 8em;
  background-color: #ff4500;
  color: white;
  text-align: center;
  margin-left: 1em;
  margin-top: -0.5em;
`;
export { AboutWrap, TopWrap, TextWrap, CountWrap, Slug, FooterWrap, TagWrap };
