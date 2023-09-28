import React from "react";

interface props {
  data: {
    avatar_url: string;
    followers: number;
    public_repos: number;
  };
}

const GithubStats: React.FC<props> = (data) => {
  return (
    <div className="githubInfo">
      <div className="statsbox">
        <img src={data.data.avatar_url} alt="avatar" />
        <div className="stats">
          <div className="profilebox">
            <span className="material-symbols-outlined">groups</span>
            <h2>{data.data.followers} Followers</h2>
          </div>
          <div className="profilebox">
            <span className="material-symbols-outlined">language</span>
            <h2>{data.data.public_repos} Repositories</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
