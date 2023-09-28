import Nav from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import React, { useState, useEffect } from "react";
import Repository from "./components/Repository";
import "./index.css";
import GithubStats from "./components/GithubStats";
import Footer from "./components/Footer";
import Return from "./components/Return";

const App: React.FC = () => {
  const [github, setGithub] = useState<any>(null);
  const [githubHeader, setGithubHeader] = useState<any>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/cuzimlel/repos")
      .then((response) => response.json())
      .then((response) => {
        setGithub(response);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/cuzimlel")
      .then((response) => response.json())
      .then((response) => {
        setGithubHeader(response);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      {githubHeader ? (
        <GithubStats data={githubHeader} />
      ) : (
        <div>Fetching Data...</div>
      )}
      {github ? (
        <Repository data={github} />
      ) : (
        <div>Fetching Repositories...</div>
      )}
      <Footer />
      <Return />
    </div>
  );
};

export default App;
