import { useEffect, useState } from "react";
import React from "react";

interface props {
  data: {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    html_url: string;
  }[];
}

type ColorLang = {
  language: string;
  color: string;
};

const Repository: React.FC<props> = ({ data }) => {
  const [languageColors, setLanguageColors] = useState<ColorLang[]>([
    { language: "null", color: "null" },
  ]);

  const colorUrl =
    "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";

  useEffect(() => {
    fetch(colorUrl)
      .then((res) => res.json())
      .then((colorsData) => {
        const colorsArray: ColorLang[] = Object.keys(colorsData).map(
          (language) => ({
            language,
            color: colorsData[language].color,
          })
        );
        setLanguageColors(colorsArray);
      })
      .catch((err) => console.error(err));
  }, []);

  const repos = data.map((repo) => (
    <div className="repo" key={repo.id}>
      <div className="repo_top">
        <span className="material-symbols-outlined">bookmarks</span>
        <h1 onClick={() => (window.location.href = repo.html_url)}>
          {repo.name}
        </h1>
      </div>

      <div className="repo_middle">
        <p className="description">{repo.description}</p>
      </div>
      <div className="repo_footer">
        <div
          className="lang_circle"
          style={{
            backgroundColor:
              languageColors.find(
                (colorLang) => colorLang.language === repo.language
              )?.color || "green",
          }}
        ></div>
        <p className="language">{repo.language ? repo.language : "Textfile"}</p>
        <span className="material-symbols-outlined" id="stars">
          star
        </span>
        <p className="language">{repo.stargazers_count}</p>
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
