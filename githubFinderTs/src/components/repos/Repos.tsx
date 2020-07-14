import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

interface Props {
  repos: repo[];
}

interface repo {
  html_url: string;
  name: string;
  id: string;
}

const Repos = ({ repos }: Props) => {
  return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
