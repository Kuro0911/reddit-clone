import styled from "styled-components";

const NavbarWrapper = styled.div`
  top: 0;
  display: flex;
  width: 100%;
  height: 3.25em;
  .left {
    padding: 0.5em;
    width: 30%;
    background-color: pink;
  }
  .center {
    padding: 0.5em;
    width: 40%;
  }
  .right {
    padding: 0.5em;
    width: 40%;
    background-color: green;
  }
`;

export default NavbarWrapper;
