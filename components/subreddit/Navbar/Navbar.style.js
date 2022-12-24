import styled from "styled-components";

const NavbarWrapper = styled.div`
  top: 0;
  background-color: white;
  display: flex;
  width: 100%;
  height: 3.25em;
  .left {
    padding: 0.5em;
    width: 30%;
    .logo {
      height: 2em;
      margin-left: 1em;
      margin-top: 0.5em;
      cursor: pointer;
    }
  }
  .center {
    padding: 0.5em;
    width: 40%;
  }
  .right {
    padding: 0.5em;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .log-btn {
      border-radius: 20px;
      margin-left: 2%;
      height: 2.5em;
      width: 10em;
    }
    .sign-btn {
      border-radius: 20px;
      margin-left: 2%;
      color: #fff;
      height: 2.5em;
      width: 10em;
    }
    .btn {
      border-radius: 20px;
      margin-left: 5%;
      margin-right: 2%;
      height: 2.75em;
      color: #7c7c7c;
    }
  }
`;

export default NavbarWrapper;
