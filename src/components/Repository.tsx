import React from "react";

interface props {
  data: {
    id: number;
    name: string;
    description: string;
    language: string;
    html_url: string;
  }[];
}

const Repository: React.FC<props> = ({ data }) => {
  const repos = data.map((repo) => (
    <div className="repo" key={repo.id}>
      <div className="innerRepo">
        <h1>
          <a>{repo.name}</a>
        </h1>
        <p className="description">{repo.description}</p>
        <p className="language">{repo.language}</p>
        <button
          onClick={() => (window.location.href = repo.html_url)}
          className="viewproject"
        >
          View Project*
        </button>
      </div>
    </div>
  ));

  return (
    <div className="projects" id="projects">
      <div className="allrepos">{repos}</div>
    </div>
  );
};

export default Repository;
