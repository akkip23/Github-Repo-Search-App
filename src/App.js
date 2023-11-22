import { useEffect, useState } from "react";
import axios from "axios";
import { SearchBar, RepoCardBody, SortRepo } from "./CSS/SearchBar";
import RepoCard from "./RepoCard";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [sortBy, setSortBy] = useState("disabledOpt");

  useEffect(() => {
    if (searchQuery) {
      fetchRepos();
      setSortBy("disabledOpt");
    }
  }, [searchQuery]);

  useEffect(() => {
    if (sortBy != "disabledOpt") {
      fetchSortRepos();
    }
  }, [sortBy]);

  const fetchRepos = async () => {
    try {
      await axios
        .get(`https://api.github.com/search/repositories?q=${searchQuery}`)
        .then((Response) => {
          console.log(Response.data.items);
          setRepos(Response.data.items);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSortRepos = async () => {
    try {
      await axios
        .get(
          `https://api.github.com/search/repositories?q=${searchQuery}&sort=${sortBy}&order=desc`
        )
        .then((Response) => {
          console.log(Response.data.items);
          setRepos(Response.data.items);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SearchBar>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Repository"
        />
      </SearchBar>
      <SortRepo>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option disabled value="disabledOpt">
            Select To Sort
          </option>
          <option value="stars">Stars</option>
          <option value="watchers">Watchers Count</option>
          <option value="score">Score</option>
          <option value="name">Name</option>
          <option value="created">Created At</option>
          <option value="updated">Updated At</option>
        </select>
      </SortRepo>
      <RepoCardBody>
        {searchQuery ? (
          repos?.map((repo) => (
            <RepoCard
              key={repo.id}
              avatar={repo.owner.avatar_url}
              repoName={repo.name}
              stars={repo.stargazers_count}
              description={repo.description}
              language={repo.language}
              viewRepo={repo.html_url}
            />
          ))
        ) : (
          <h1>
            SEARCH{" "}
            <span>
              <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" />
            </span>{" "}
            REPOSITORY
          </h1>
        )}
      </RepoCardBody>
    </>
  );
}

export default App;
