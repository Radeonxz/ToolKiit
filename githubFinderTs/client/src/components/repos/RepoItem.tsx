import React from "react";
import PropTypes from "prop-types";

interface Props {
  repo: {
    html_url: string;
    name: string;
  };
}

const RepoItem = ({ repo: { html_url, name } }: Props) => {
  return (
    <div>
      <div className="card">
        <h3>
          <a href={html_url}>{name}</a>
        </h3>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
