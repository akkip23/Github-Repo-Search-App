import React from "react";
import {
  RepoCardDetail,
  Avatar,
  Achievement,
  RepoDes,
  VisitRepos,
} from "./CSS/RepoCard";

const RepoCard = ({
  avatar,
  repoName,
  stars,
  description,
  language,
  viewRepo,
}) => {
  return (
    <>
      <RepoCardDetail>
        <Avatar src={avatar} alt="Avatar"></Avatar>
        <h2>{repoName}</h2>
        <Achievement>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" />
            <p>{stars}</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/128/9684/9684475.png" />
            <p>{language}</p>
          </div>
        </Achievement>
        <RepoDes>
          {description ? description : "No Description Available"}
        </RepoDes>
        <VisitRepos>
          <a href={viewRepo} target="_blank">
            <button>View Repo</button>
          </a>
        </VisitRepos>
      </RepoCardDetail>
    </>
  );
};

export default RepoCard;
