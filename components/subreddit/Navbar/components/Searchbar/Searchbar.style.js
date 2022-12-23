import styled from "styled-components";

const SearchbarWrapper = styled.div`
  padding-right: 0.5em;
  .search-bar {
    display: flex;
    background-color: white;
    border-radius: 15px 15px 15px 15px;
    align-items: center;
    height: 2.45em;
    width: 100%;
    padding-left: 0.5em;
  }
  .search-bar:hover {
    outline: auto blue;
  }
  input {
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    width: 90%;
    font-size: 1em;
  }
  .no-outline:focus {
    outline: none;
  }
`;

export default SearchbarWrapper;
