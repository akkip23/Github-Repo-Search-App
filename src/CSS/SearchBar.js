// import styled component from styled-components
import styled from "styled-components";

export const SearchBar = styled.div`
  z-index: 1000;
  display: flex;
  position: fixed;
  padding-top: 20px;
  justify-content: center;
  width: 100%;
  background-color: white;
  input {
    height: 30px;
    width: 500px;
    padding: 10px;
    font-size: 1.2rem;
    border-radius: 10px;
  }
`;

export const RepoCardBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px 10px 20px 10px;
  justify-items: center;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  transition: -webkit-backdrop-filter 0.3s ease-in-out,
    backdrop-filter 0.5s ease-in-out;
  h1 {
    width: 95vw;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      img {
        width: 100px;
        padding: 20px;
      }
    }
  }
`;

export const SortRepo = styled.div`
  padding-top: 120px;
  display: flex;
  justify-content: flex-end;
  padding-left: -10px;
  margin-right: 50px;
  select {
    width: 20%;
    height: 30px;
    font-size: 1.2rem;
    border-radius: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    border-bottom: 2px solid #607d8b;
  }
`;
