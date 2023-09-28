import React from "react";
import skin from "../images/justdaniel.png";

const About: React.FC = () => (
  <>
    <section className="about" id="about">
      <div className="abouttext">
        <h1>About me</h1>
        <p>
          Hello there, my Name is Daniel and I'm a Webdeveloper! I'm currently
          16 Years old and I live in Germany. I started coding back in 2022 when
          I was 15 Years old. The reason I started was that I wanted to become a
          Minecraft Plugin Dev so I started learning Java and got into Plugin
          Development. After I successfully created some nice plugins for
          different servers I got the idea to get maybe a job as a programmer
          later, so I decided to learn Web Development and gained some
          experience in a new section of Software Development.
        </p>
        <div className="aboutbuttons">
          <button
            className="spigot"
            onClick={() => (window.location.href = "https://www.spigotmc.org/")}
          >
            Spigot<span className="material-symbols-outlined">near_me</span>
          </button>

          <button
            className="minecraft"
            onClick={() => (window.location.href = "https://www.minecraft.net")}
          >
            Minecraft<span className="material-symbols-outlined">near_me</span>
          </button>
        </div>
      </div>
      <div className="aboutcard">
        <img src={skin}></img>
      </div>
    </section>
  </>
);

export default About;
