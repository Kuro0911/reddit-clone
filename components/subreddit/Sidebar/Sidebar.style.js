import styled from "styled-components";

export const SidebarWrap = styled.div`
  width: 20vw;
  background-color: white;
  .top {
    text-align: left;
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .head {
      margin-left: 1.7em;
      color: #7c7c7c;
      font-weight: 700;
      font-size: 12px;
      margin-bottom: 0.75em;
    }
    .btn {
      span {
        color: black;
        text-transform: initial;
      }
      margin-left: 1em;
    }
  }
  .mid {
    text-align: left;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .head {
      margin-left: 1.7em;
      color: #7c7c7c;
      font-weight: 700;
      font-size: 12px;
      margin-bottom: 0.75em;
    }
    .btn {
      span {
        color: black;
        text-transform: initial;
      }
      margin-left: 1em;
    }
    .recent {
      width: 100%;
      display: flex;
      color: #7c7c7c;
      align-items: center;
      margin-bottom: 0.65em;
      justify-content: space-between;
      .ico {
        margin-right: 0.75em;
      }
      .left {
        display: flex;
        align-items: center;
        margin-left: 1em;
        .ico {
          color: #ff3d00;
          margin-right: 0.25em;
        }
        span {
          color: black;
        }
      }
    }
  }
  .low {
    text-align: left;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .head {
      margin-left: 1.7em;
      color: #7c7c7c;
      font-weight: 700;
      font-size: 12px;
      margin-bottom: 0.75em;
    }
    .btn {
      span {
        color: black;
        text-transform: initial;
      }
      margin-left: 1em;
    }
  }
`;
