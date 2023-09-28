import React from "react";
import twitterImage from "../images/twitter.png";
import githubImage from "../images/github.png";
import instagramImage from "../images/instagram.png";
import youtubeImage from "../images/youtube.png";
import discordImage from "../images/discord.png";

const Nav: React.FC = () => (
  <>
    <header className="navbar" id="nav">
      <nav>
        <span className="material-symbols-outlined" id="hamburger">
          menu
        </span>
        <ul id="items">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skills">SKILLS</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#footer">FOOTER</a>
          </li>
        </ul>
      </nav>
      <div className="hello">
        <p>Hey, I'm</p>
        <h1>Just_Daniel,</h1>
        <p className="webdev" id="webdev">
          A Webdeveloper
        </p>
        <div className="media">
          <a href="https://twitter.com/Cuz_Im_Lel">
            <img src={twitterImage}></img>
          </a>
          <a href="https://www.instagram.com/just_dxniel_">
            <img src={instagramImage}></img>
          </a>
          <a href="https://github.com/cuzimlel">
            <img src={githubImage}></img>
          </a>
          <a href="https://www.youtube.com/channel/UCEOOoFK1HuzjZ9NFiPDXU3w">
            <img src={youtubeImage}></img>
          </a>
          <a href="https://discord.com/users/812782116915642419">
            <img src={discordImage}></img>
          </a>
        </div>
      </div>
    </header>
  </>
);

export default Nav;
