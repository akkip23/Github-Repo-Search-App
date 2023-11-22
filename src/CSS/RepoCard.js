import styled from "styled-components";

export const RepoCardDetail = styled.div`
  width: 280px;
  background: white;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 0px;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 20px;
  h2 {
    white-space: nowrap;
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`;

export const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: solid 10px transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(90deg, #ff606026 40%, #8860ff26 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-size: 100% 100%, 100% 100%;
  background-position: center center, center bottom;
  background-repeat: no-repeat;
  transition: 1s;
`;

export const Achievement = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 2.5rem;
    }
    p {
      margin-top: 5px;
    }
  }
`;

export const RepoDes = styled.p`
  white-space: nowrap;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const VisitRepos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 5%;
  button {
    padding: 3px 20px;
    background: #ffdf33;
    border-radius: 10px;
    cursor: pointer;
  }
`;
